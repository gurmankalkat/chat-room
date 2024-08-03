"use client";

import * as React from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; 
import axios from "axios";

export default function Chat() {
    const searchParams = useSearchParams();
    const username = searchParams.get("username");

    const [ws, setWS] = useState<WebSocket | null>(null);
    const [onlinePeople, setOnlinePeople] = useState<Set<string>>(new Set());
    const [newMessage, setNewMessage] = useState<string>("");
    const [messages, setMessages] = useState<{ _id: string; sender: string; text: string; upvotes: number; downvotes: number; }[]>([]);
    

    useEffect(() => {
        const websocket = new WebSocket("ws://localhost:8000");
        websocket.onopen = () => {
            console.log("WebSocket connection established");
            setWS(websocket);
        };
        websocket.onmessage = handleMessage;

        return () => {
            websocket.close();
        };
    }, []);

    useEffect(() => {
        axios.get("http://localhost:8000/api/messages")
            .then(response => {
                const { data } = response;
                setMessages(data);
            })
            .catch(error => {
                console.error("Error fetching messages:", error);
            });
    }, []);

    function handleMessage(event: MessageEvent) {
        const messageData = JSON.parse(event.data);
        if ("online" in messageData) {
            showOnlinePeople(messageData.online);
        } else {
            setMessages(prev => ([...prev, {_id: Date.now().toString(), sender: messageData.sender, text: messageData.text, upvotes: 0, downvotes: 0}]));
            console.log({messageData});
        }
    }

    const handleUpvote = async (id: string) => {
        try {
          const response = await axios.post(`http://localhost:8000/api/messages/${id}/upvote`);
          setMessages(prevMessages => prevMessages.map(msg => msg._id === id ? response.data : msg));
        } catch (error) {
          console.error("Error upvoting message:", error);
        }
    };
    
    const handleDownvote = async (id: string) => {
        try {
          const response = await axios.post(`http://localhost:8000/api/messages/${id}/downvote`);
          setMessages(prevMessages => prevMessages.map(msg => msg._id === id ? response.data : msg));
        } catch (error) {
          console.error("Error downvoting message:", error);
        }
    };

    function showOnlinePeople(online: {userID: string, username: string}[]) {
        const people = new Set(online.map(person => person.username));
        console.log(people);
        setOnlinePeople(people);
    }

    function sendMessage(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (ws && newMessage.trim()) {
            ws.send(JSON.stringify({ text: newMessage }));
            setMessages(prev => ([...prev, {_id: Date.now().toString(), sender: username || '', text: newMessage, upvotes: 0, downvotes: 0}]));
            setNewMessage("");
        }
    }


    const onlinePeopleExclude = Array.from(onlinePeople).filter(person => person !== username);
    console.log(onlinePeopleExclude);

    return (
        <div className="flex h-screen p-4 space-x-4">
            <div className="w-1/4">
                <Card className="h-full">
                    <CardHeader>
                        <CardTitle>People Online</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col space-y-2">
                        {onlinePeopleExclude.map(person => (
                            <Card key={person} className="p-4">
                                <CardTitle className="text-sm">{person}</CardTitle>
                            </Card>
                        ))}
                    </CardContent>
                </Card>
            </div>
            <div className="w-3/4">
                <Card className="h-full flex flex-col">
                    <CardHeader>
                        <CardTitle>Messages</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow overflow-y-scroll">
                        <div>
                            {messages.map((message, index) => (
                                <div key={index} className={`p-2 space-y-2 ${message.sender === username ? "text-right" : "text-left"}`}>
                                    <div className="text-xs text-gray-500">{message.sender}</div>
                                    <div className={`inline-block p-2 rounded ${message.sender === username ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>
                                        {message.text}
                                    </div>
                                    <div className={`flex items-center space-x-2 ${message.sender === username ? "justify-end" : "justify-start"}`}>
                                        <button onClick={() => handleUpvote(message._id)}>
                                            <span>▲</span> 
                                        </button>
                                        <span>{message.upvotes}</span>
                                        <button onClick={() => handleDownvote(message._id)}>
                                            <span>▼</span> 
                                        </button>
                                        <span>{message.downvotes}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                    <div className="p-4 border-t border-gray-200">
                        <form className="flex flex-row space-x-2" onSubmit={sendMessage}>
                            <Input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Type your message" className="w-full p-2" />
                            <Button type="submit">Send</Button>
                        </form>
                    </div>
                </Card>
            </div>
        </div>
    );
}

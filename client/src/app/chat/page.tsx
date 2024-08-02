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
    const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
    const [onlinePeople, setOnlinePeople] = useState<Set<string>>(new Set());
    const [newMessage, setNewMessage] = useState<string>("");
    const [messages, setMessages] = useState<{sender: string, text: string}[]>([]);

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
            setMessages(prev => ([...prev, {sender: messageData.sender, text: messageData.text}]));
            console.log({messageData});
        }
    }

    function showOnlinePeople(online: {userID: string, username: string}[]) {
        const people = new Set(online.map(person => person.username));
        console.log(people);
        setOnlinePeople(people);
    }

    function handleSelected(person: string) {
        setSelectedPerson(person);
        console.log(person);
    }

    function sendMessage(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (ws && newMessage.trim()) {
            ws.send(JSON.stringify({ text: newMessage }));
            setMessages(prev => ([...prev, {sender: username || '', text: newMessage, isOur: true}]));
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

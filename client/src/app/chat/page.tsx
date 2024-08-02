"use client";

import * as React from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; 

export default function Chat() {
    const searchParams = useSearchParams();
    const username = searchParams.get("username");

    const [ws, setWS] = useState<WebSocket | null>(null);
    const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
    const[onlinePeople, setOnlinePeople] = useState<Set<string>>(new Set());
    const[newMessage, setNewMessage] = useState<string>("");
    const[messages, setMessages] = useState<{sender: string, text: string}[]>([]);

    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8000"); // Connect to the correct port
        ws.onopen = () => {
            console.log("WebSocket connection established");
            setWS(ws);
            ws.addEventListener("message", handleMessage);
        };
    }, []);

    function handleMessage(event: MessageEvent) {
        const messageData = JSON.parse(event.data);
        if ("online" in messageData) {
            showOnlinePeople(messageData.online);
        } else {
            setMessages(prev => ([...prev, {sender: messageData.sender, text: messageData.text, isOur: false}]));
            console.log({messageData});
        }
    };

    function showOnlinePeople(online: {userID: string, username: string}[]) {
        const people = new Set(online.map(person => person.username));
        console.log(people);
        setOnlinePeople(people);
    }

    function handleSelected(person: string) { // Change 'String' to 'string'
        setSelectedPerson(person);
        console.log(selectedPerson);
    }

    function sendMessage(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (ws) {
            ws.send(JSON.stringify({
                recipient: selectedPerson,
                text: newMessage,
            }));
        }
        setNewMessage("");
        setMessages(prev => ([...prev, {sender: username || '', text: newMessage, isOur: true}]));
    }

    const onlinePeopleExclude = Array.from(onlinePeople).filter(person => person !== username);

    return (
        <div className="flex h-screen p-4 space-x-4">
            <div className="w-1/3">
                <Card className="h-full">
                    <CardHeader>
                        <CardTitle>Conversations</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col space-y-2">
                        {Array.from(onlinePeopleExclude).map(username => (
                            <Card key={username} className={`p-4 cursor-pointer ${selectedPerson === username ? "bg-gray-50" : ""}`} onClick={() => handleSelected(username)}>
                                <CardTitle className="text-sm">{username}</CardTitle>
                            </Card>
                        ))}
                    </CardContent>
                </Card>
            </div>
            <div className="w-2/3">
                <Card className="h-full flex flex-col">
                    <CardHeader>
                        <CardTitle>Messages</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        {!selectedPerson && <div className="flex justify-center items-center h-full text-gray-500">Select a contact</div>}
                        {!!selectedPerson && (
                            <div>
                                {messages.map((message) => (
                                    <div key={message.text}>
                                        <div>{message.text}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                    {!!selectedPerson && (
                        <div className="p-4 border-t border-gray-200">
                            <form className="flex flex-row space-x-2" onSubmit={sendMessage}>
                                <Input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Type your message" className="w-full p-2" />
                                <Button type="submit">Send</Button>
                            </form>
                        </div>
                    )}
                </Card>
            </div>
        </div>
    );
}
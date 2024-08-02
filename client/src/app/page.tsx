"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast"
import { useRouter } from "next/navigation"; 

axios.defaults.withCredentials = true;

export default function Home() {
  const router = useRouter();
  
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = data;
    try {
      const response = await axios.post("http://localhost:8000/api/auth/login", {
        username,
        password
      });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setData({ username: "", password: "" });
        toast.success("Login successful!");
        router.push(`/chat?username=${username}`);
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage = error.response.data.error || "An error occurred. Please try again.";
        toast.error(errorMessage);
        console.log("Error in handleSubmit:", errorMessage);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
        console.log("Unexpected error in handleSubmit:", error);
      }
    }
  }
  
  return (
    <main className="flex flex-col items-center justify-center h-screen space-y-10">
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <div>
        <h1 className="text-4xl font-bold ">Login</h1>
      </div>
      <form className="flex flex-col gap-4 max-w-sm w-full" onSubmit={handleSubmit}>
        <Input type="text" placeholder="Username" value={data.username} onChange={(e) => setData({ ...data, username: e.target.value })} />
        <Input type="password" placeholder="Password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
        <Button type="submit">Submit</Button>
      </form>
      <div className="flex flex-row gap-2">
        <p>Don't have an account? </p>
        <Link href="/register" className="text-blue-500">Sign Up</Link>
      </div>
    </main>
  );
}

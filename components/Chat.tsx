"use client";

// import {}
import { db } from "@/firebase";
import { useUser } from "@clerk/nextjs";
import { useState, useTransition } from "react";

export type Message = {
  id?: string;
  role: "human" | "ai" | "placeholder";
  message: string;
  createdAt: Date;
};

function Chat({ id }: { id: string }) {
  const { user } = useUser();

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isPending, startTransition] = useTransition();

  return <div>Chat</div>;
}
export default Chat;

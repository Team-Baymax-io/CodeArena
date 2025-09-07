import { useState } from "react";
import axios from "axios";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages([...messages, userMsg]);

    const res = await axios.post("http://localhost:5000/api/chat", {
      message: input,
    });

    const botMsg = { sender: "bot", text: res.data.reply };
    setMessages((prev) => [...prev, botMsg]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-white shadow-lg rounded-2xl">
      <div className="p-4 h-80 overflow-y-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={msg.sender === "user" ? "text-right" : "text-left"}
          >
            <p
              className={`p-2 rounded-lg m-1 ${
                msg.sender === "user" ? "bg-blue-200" : "bg-gray-200"
              }`}
            >
              {msg.text}
            </p>
          </div>
        ))}
      </div>
      <div className="flex p-2 border-t">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-lg p-2"
          placeholder="Ask me about your health..."
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 bg-blue-500 text-white rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}

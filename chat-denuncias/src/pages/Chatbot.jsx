import { useState } from "react";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">ChatBot</h1>
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-4 h-96 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
            <span className="bg-gray-300 p-2 rounded-lg">{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="w-full max-w-md flex mt-4">
        <input
          type="text"
          className="flex-1 p-2 border rounded-l-lg"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-blue-600 text-white p-2 rounded-r-lg" onClick={handleSend}>
          Enviar
        </button>
      </div>
    </div>
  );
}

export default Chatbot;

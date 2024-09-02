import React from "react";

const ChatArea = ({ idOther }) => {
  const messages = [
    {
      id: 1,
      sender: "Alice",
      content: "Hello!",
      timestamp: "10:00 AM",
      senderID: 5,
      receiverID: 1,
    },
    {
      id: 2,
      sender: "Bob",
      content: "Hi, how are you?",
      timestamp: "10:02 AM",
      senderID: 5,
      receiverID: 1,
    },
    {
      id: 3,
      sender: "Alice 3",
      content: "salut! encore",
      timestamp: "10:00 AM",
      senderID: 5,
      receiverID: 2,
    },
    {
      id: 4,
      sender: "baba",
      content: "cool ?",
      timestamp: "10:02 AM",
      senderID: 5,
      receiverID: 2,
    },
    // Ajoutez plus de messages ici
  ];
  return (
    <div className="w-full h-full bg-white p-4 flex flex-col justify-end">
      {messages && (
        <>
          <div className="overflow-y-auto">
            {messages.map(
              (message) =>
                message.receiverID == idOther && (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "Alice" ? "justify-start" : "justify-end"} mb-2`}
                  >
                    <div className="bg-gray-200 p-2 rounded max-w-xs">
                      <p className="font-semibold">{message.sender}</p>
                      <p>{message.content}</p>
                      <span className="text-xs text-gray-500">
                        {message.timestamp}
                      </span>
                    </div>
                  </div>
                ),
            )}
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-2 border rounded"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ChatArea;

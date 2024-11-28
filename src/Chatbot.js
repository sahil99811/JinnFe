import React, { useState } from "react";
import "./Chatbot.css";

function Chatbot({
  buttonIcon,
  borderColor,
  borderRadius,
  chatTitleBgColor,
  botBubbleBgColor,
  botTextColor,
  userBubbleBgColor,
  userTextColor,
  textFont,
}) {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
    { sender: "user", text: "Hello Jinn" },
  ]);
  const [inputValue, setInputValue] = useState("");


  const sendMessage = (message) => {
    if (message.trim() === "") return;
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: message },
    ]);
    setInputValue(""); 
  };

  return (
    <div
      className="chatbot-container"
      style={{ borderColor: borderColor, borderRadius: `${borderRadius}px` }}
    >
      {/* Chatbot Header with Icon */}
      <div
        className="chat-header"
        style={{ backgroundColor: chatTitleBgColor }}
      >
        <div className="header-content">
          <button
            style={{
              backgroundImage: `url(${buttonIcon})`,
              width: "40px",
              height: "40px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: "none",
            }}
          ></button>
          <span className="chat-title">Jinn</span>
        </div>
      </div>

      {/* Chatbox Messages */}
      <div className="chat-box">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-bubble ${message.sender}`}
            style={{
              backgroundColor:
                message.sender === "bot" ? botBubbleBgColor : userBubbleBgColor,
              color: message.sender === "bot" ? botTextColor : userTextColor,
              fontFamily: textFont,
            }}
          >
            {message.text}
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask us anything..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage(inputValue);
            }
          }}
        />
      </div>
    </div>
  );
}

export default Chatbot;

import { useEffect, useRef } from "react";

const Message = ({ author, content }) => {
  let authorColor = author === "Guest" ? "#E68C05" : "#344feb";  

  return (
    <span className="chat-messages-message" style={{ color: "#8f8f94" }}>
      <span style={{ fontWeight: "bold", color: authorColor }}>{author}: </span>
      {content}
    </span>
  );
};

export const Messages = ({ messages }) => {
    console.log("Mensajes en Messages:", messages);  
  
    const messagesEndRef = useRef(null);
  
    const scrollBottom = () => {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };
  
    useEffect(() => {
      scrollBottom();
    }, [messages]);
  
    return (
      <div className="chat-messages-container">
        {messages.map((message) => (
          <Message
            key={`${message.author}-${message.content}-${message.date}`}
            author={message.author}
            content={message.content}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
    );
  };
  

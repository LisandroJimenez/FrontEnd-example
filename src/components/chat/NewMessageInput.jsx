import { useState } from "react";

export const NewMessageInput = ({ sendMessage }) => {
  const [messageContent, setMessageContent] = useState("");

  const handleValueChange = (event) => {
    setMessageContent(event.target.value);  
  };

  const handelSendMessage = () => {
    if (messageContent.length > 0) {
      sendMessage(messageContent);  
      setMessageContent("");  
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handelSendMessage();  
    }
  };

  return (
    <div className="chat-message-input-container">
      <input
        className="chat-message-input"
        placeholder="type message ..."
        value={messageContent}
        onChange={handleValueChange} 
        onKeyDown={handleKeyPress}  
      />
    </div>
  );
};

import { io } from "socket.io-client";
import { useStore } from "./store"; 

let socket;
const ip = "http://localhost:8080"; 

export const connectWithSocketServer = () => {
    socket = io(ip);  
    socket.on("connect", () => {
    });

  socket.on('chat-history', (chatHistory) => {
    const { setChatHistory } = useStore.getState();
    setChatHistory(chatHistory); 
  });

  socket.on('chat-message', (chatMessage) => {
    const { chatHistory, setChatHistory } = useStore.getState();
  
    setChatHistory({
      channelId: chatHistory.channelId || chatMessage.toChannel,  
      messages: [
        ...chatHistory.messages,
        {
          author: chatMessage.message.author,
          content: chatMessage.message.content,
          date: new Date().toISOString(),
        },
      ],
    });
  });
  
};

export const getChatHistory = (channelId) => {
  socket.emit('chat-history', channelId);  
};

export const sendChatMessage = (toChannel, message) => {
  socket.emit('chat-message', {
    toChannel,
    message,
  });
};

export const closeChatSubscription = (channelId) => {
  socket.emit("chat-unsubscribe", channelId);
};

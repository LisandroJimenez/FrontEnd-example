import { useEffect } from "react";
import { useStore } from "../../services/store";
import { connectWithSocketServer, closeChatSubscription, sendChatMessage, getChatHistory } from "../../services/socketConn";
import { useUserDetails } from "./useUserDetails";

export const useChatHistory = (channelId) => {
  const { chatHistory } = useStore();
  console.log("chatHistory:", chatHistory);
  const { isLogged, username } = useUserDetails();

  useEffect(() => {
    connectWithSocketServer(); 
    getChatHistory(channelId);

    return () => {
      closeChatSubscription(channelId);
    };
  }, [channelId]);

  const sendMessage = (message) => {
    if (!message || message.trim() === "") return;

    sendChatMessage(channelId, {
      author: isLogged ? username : "Guest",
      content: message.trim(),
    });
  };

  return {
    messages:
      chatHistory?.channelId === channelId ? chatHistory.messages : [],
    sendMessage,
  };
};

// context/ChatProvider.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    // Example: Replace this logic with your actual authentication or navigation logic
    if (!userInfo) {
      // Use the Navigate component within a component body or render function
      // Here, we return null, but in your actual code, you might render a Login component or something else
      return Navigate("/");
    }
  }, []);

  return <ChatContext.Provider value={{ user, setUser }}>{children}</ChatContext.Provider>;
};

export const useChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;

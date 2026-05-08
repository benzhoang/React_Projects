import ChatMessage from "./components/ChatMessage";
import Header from "./components/Header";
import { useState } from "react";
import { formatTime } from "./utils/chatUtils";
import LoadingIndicator from "./components/LoadingIndicator";
import ChatInput from "./components/ChatInput";
import { generateContent } from "./services/geminiApi";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello, how can I help you?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSendMessage = () => {
    const userMessage = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    setTimeout(() => {
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: generateContent(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="max-w-5xl mx-auto space-y-4">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              isDarkMode={isDarkMode}
              messages={message}
              formatTime={formatTime}
            />
          ))}
          {isLoading && <LoadingIndicator isDarkMode={isDarkMode} />}
        </div>
      </div>
      <ChatInput
        isDarkMode={isDarkMode}
        inputValue={inputValue}
        setInputValue={setInputValue}
        loading={isLoading}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default App;

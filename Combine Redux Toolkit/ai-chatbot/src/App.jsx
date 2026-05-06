import ChatMessage from "./components/ChatMessage";
import Header from "./components/Header";
import { useState } from "react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
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
  return (
    <div className="flex flex-col h-screen">
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="max-w-5xl mx-auto space-y-4">
          <ChatMessage isDarkMode={isDarkMode} messages={messages} />
        </div>
      </div>
    </div>
  );
};

export default App;

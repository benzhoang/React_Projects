import { Bot, User } from "lucide-react";

const ChatMessage = ({ isDarkMode, messages }) => {
  return (
    <div
      className={`${messages.sender === "user" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`${
          messages.sender === "user"
            ? "bg-gradient-to-r from-indigo-600 to-blue-500 via-purple-500 text-white shadow-md"
            : isDarkMode
              ? "bg-gray-800 text-gray-100 border border-gray-700"
              : "bg-white text-gray-800 shadow-md"
        } 
        flex max-w-[80%] md:max-w-[70%] rounded-2xl px-5 py-3.5`}
      >
        <div
          className={`${messages.sender === "user" ? "text-indigo-200" : isDarkMode ? "text-indigo-400" : "text-gray-800"} flex-shrink-0 mr-3`}
        >
          {messages.sender === "user" ? (
            <User className="h-5 w-5" />
          ) : (
            <Bot className="h-5 w-5" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;

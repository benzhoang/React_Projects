import { Bot, User } from "lucide-react";

const ChatMessage = ({ isDarkMode, messages, formatTime }) => {
  return (
    <div
      className={`flex ${messages.sender === "user" ? "justify-end" : "justify-start"}`}
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
        <div className="flex-1">
          <div className="mb-1 flex justify-between items-center">
            <span className="font-medium">
              {messages.sender === "user" ? "You" : "AI Assistant"}
            </span>
            <span
              className={`text-xs ml-3 ${messages.sender === "user" ? "opacity-70" : isDarkMode ? "text-gray-400" : "text-gray-500"}`}
            >
              {formatTime(messages.timestamp)}
            </span>
          </div>
          <p className="text-sm md:text-base whitespace-pre-wrap break-words leading-relaxed">
            {messages.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;

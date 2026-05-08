// Generate a random response from the AI
export const getRandomResponse = () => {
  const botResponses = [
    "Let me check that for you...",
    "Here's what I found about that topic.",
    "That depends on a few different factors.",
    "I can help you with that information.",
    "Here's a quick explanation for you.",
    "Based on the data available, this is the result.",
    "There are several ways to approach this problem.",
    "This is a common question. Here's the answer.",
    "I analyzed your request and found this.",
    "Here's the response generated for your question.",
  ];

  return botResponses[Math.floor(Math.random() * botResponses.length)];
};

// Format timestamp to readable time
export const formatTime = (date) => {
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

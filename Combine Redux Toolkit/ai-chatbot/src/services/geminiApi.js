import axios from "axios";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_API_BASE = import.meta.env.VITE_GEMINI_API_URL;

function getRequestUrl() {
  if (import.meta.env.DEV) {
    return "/api/gemini";
  }
  const url = new URL(GEMINI_API_BASE);
  url.searchParams.set("key", GEMINI_API_KEY);
  return url.toString();
}

export const generateContent = async (message) => {
  if (!GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not set in .env file.");
  }

  try {
    const response = await axios.post(
      getRequestUrl(),
      {
        contents: [
          {
            parts: [{ text: message }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        validateStatus: () => true,
      }
    );

    if (response.status < 200 || response.status >= 300) {
      const errorText =
        typeof response.data === "string"
          ? response.data
          : JSON.stringify(response.data);
      console.error("API Error:", errorText);
      throw new Error(`Failed to generate content: ${errorText}`);
    }

    const data = response.data;
    if (!data || !data.candidates || data.candidates.length == 0) {
      throw new Error("No candidates found in the response");
    }

    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
};

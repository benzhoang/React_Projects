import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const envDir = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, envDir, "");
  const apiBase = env.VITE_GEMINI_API_URL || "";
  const apiKey = env.VITE_GEMINI_API_KEY || "";
  const targetPath =
    apiBase.replace(/^https?:\/\/[^/]+/, "") ||
    "/v1beta/models/gemini-2.5-flash:generateContent";

  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        "/api/gemini": {
          target: "https://generativelanguage.googleapis.com",
          changeOrigin: true,
          rewrite: () =>
            `${targetPath}${targetPath.includes("?") ? "&" : "?"}key=${encodeURIComponent(apiKey)}`,
        },
      },
    },
  };
});

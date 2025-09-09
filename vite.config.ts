import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [],
  server: {
    port: 3000,
    proxy: {
      "/graphql": {
        target: "http://localhost:5279",
        changeOrigin: true,
      },
    },
  },
});

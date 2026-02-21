import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  base: "/",
  publicDir: "public",
  server: {
    fs: {
      // Allow serving files from the posts directory
      allow: ['..']
    }
  },
  build: {
    chunkSizeWarningLimit: 1000  // kB, default 500
  }
}));

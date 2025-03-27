import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 500, // Change this if you just want to remove the warning (not recommended)
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Creates a separate "vendor" file for dependencies
          }
        },
      },
    },
  },
});

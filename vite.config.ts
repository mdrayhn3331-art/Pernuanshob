import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace "Rayhan-digital-shop" with your GitHub repository name
export default defineConfig({
  plugins: [react()],

  // GitHub Pages
  base: "/Pernuanshob/",

  server: {
    host: true,
    port: 5173
  },

  preview: {
    port: 4173
  },

  build: {
    outDir: "dist",
    sourcemap: false,
    chunkSizeWarningLimit: 1000
  }
});

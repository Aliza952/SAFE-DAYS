import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// import { VitePWA } from "vite-plugin-pwa"; // ⚠️ temporarily commented out to prevent JSON errors

export default defineConfig({
  base: "/Safe-Days/", // 👈 needed for GitHub Pages
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // VitePWA({
    //   registerType: "autoUpdate",
    //   manifest: {
    //     name: "Safe-Days",
    //     short_name: "SafeDays",
    //     start_url: "/Safe-Days/", // must match base
    //     display: "standalone",
    //     background_color: "#ffffff",
    //     theme_color: "#2563eb",
    //     icons: [
    //       { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
    //       { src: "/icon-512.png", sizes: "512x512", type: "image/png" }
    //     ]
    //   }
    // }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

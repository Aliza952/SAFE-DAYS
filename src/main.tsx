import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// 👇 Add this import
import { registerSW } from "virtual:pwa-register";

// 👇 Register the service worker
if ("serviceWorker" in navigator) {
  registerSW({ immediate: true });
}

createRoot(document.getElementById("root")!).render(<App />);

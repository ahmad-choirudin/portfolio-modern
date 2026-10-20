import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);
const markExternalLinks = () => {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="http"]').forEach((a) => {
    if (new URL(a.href).origin !== window.location.origin) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
  });
};
markExternalLinks();
new MutationObserver(markExternalLinks).observe(document.body, { childList: true, subtree: true });
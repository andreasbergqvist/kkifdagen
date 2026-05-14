import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const routerBase = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL.slice(0, -1)
  : import.meta.env.BASE_URL;

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={routerBase}>
    <App />
  </BrowserRouter>,
);

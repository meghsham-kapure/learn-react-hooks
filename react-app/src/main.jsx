import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const divStyle = "mx-10 my-5 p-2 bg-amber-300 border-2 border-black";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <App />
    </>
  </StrictMode>,
);

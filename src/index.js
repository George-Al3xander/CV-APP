import "./styles.css"
import { createRoot}from "react-dom/client";
import React, {Component, StrictMode} from "react";
import { render } from "react-dom";



import App from "./App"


createRoot(document.getElementById("App")).render(
    <StrictMode>
        <App />
    </StrictMode>

)
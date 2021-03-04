import React from "react";
import ReactDOM from 'react-dom';
import configureStore from "./store/store";


document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello");
    const root = document.getElementById("root");
    ReactDOM.render(root);
    window.store = configureStore();
});
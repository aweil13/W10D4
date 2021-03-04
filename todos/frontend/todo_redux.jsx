import React from "react";
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import { receiveTodo, receiveTodos, removeTodo } from "./actions/todo_actions"

document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello");
    const root = document.getElementById("root");
    // ReactDOM.render(root);
    window.store = configureStore();
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.removeTodo = removeTodo;
});
import React from "react";
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import { receiveTodo, receiveTodos, removeTodo } from "./actions/todo_actions"
import App from "./components/app";
import Root from "./components/root";
import allTodos from "./reducers/selectors";

document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello");
    const store = configureStore();
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
    window.store = configureStore();
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.removeTodo = removeTodo;
    window.allTodos = allTodos;
});
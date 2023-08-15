import React, { useEffect, useState } from "react";
import confetti from 'canvas-confetti'
import TodoList from "./components/TodoList";
import FormTodo from "./components/FormTodo";
import DateBar from "./components/DateBar";

import "./index.css";

const todoArrayList = [
  { id: 0, name: "This is a task", done: true },
  { id: 1, name: "This is another task", done: true },
  { id: 2, name: "This is an unfinished task", done: false },
];

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const todoListFromLocalStorage = localStorage.getItem("todoList");
    if (todoListFromLocalStorage) {
      setTodoList(JSON.parse(todoListFromLocalStorage));
    } else {
      setTodoList(todoArrayList);
      localStorage.setItem("todoList", JSON.stringify(todoArrayList));
    }
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    const inputValue = event.target.elements[0].value.trim();
    if (!inputValue) return;
    const lastId = todoList.length > 0 ? todoList[todoList.length - 1].id : 1;
    const newTodo = { id: lastId + 1, name: inputValue, done: false };
    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
    event.target.elements[0].value = "";
  };

  const handleCheck = (id) => {
    const newTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodoList(newTodoList);

    if (newTodoList.find((todo) => todo.id === id)?.done) {
      const audio = new Audio(
        "/src/pages/projects/to-do-react/sounds/success.mp3"
      );
      audio.play();

      if (newTodoList.every((todo) => todo.done)) {
        confetti();
      }
    }
  };

  const handleDelete = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
      <div className="container flex flex-col items-center mx-auto text-2xl max-w-screen-md px-4 my-2 md:my-20">
        <DateBar />
        <TodoList
          todoList={todoList}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        <FormTodo addTodo={addTodo} />
      </div>
  );
}

export default App;

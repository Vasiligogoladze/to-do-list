import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const presetTodos = [
    { id: 1, text: "Brush Teeth" },
    { id: 2, text: "Make Bed" },
    { id: 3, text: "Eat Breakast" },
    { id: 4, text: "Do Homework" },
    { id: 5, text: "Play Ouside" },
    { id: 6, text: "Read a Book" },
    { id: 7, text: "Help wit Dishes" },
    { id: 8, text: "Go to sleep" },
  ];

  function addPresetTodo(text) {
    const newTodo = { id: nanoid(), text: text };
    setTodos([...todos, newTodo]);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <h1>Daily Todos</h1>

      <div className="todo-list">
        <h2>chemi davalebebi</h2>

        {todos.length === 0 ? (
          <p className="empty">am etapze araferia damatebuli...</p>
        ) : (
          todos.map((item) => (
            <div key={item.id} className="todo-item">
              <span>{item.text}</span>
              <button onClick={() => deleteTodo(item.id)}>remove</button>
            </div>
          ))
        )}
      </div>

      <div className="preset-buttons">
        <h2>winaswari chamonatvali</h2>
        <div className="buttons-container">
          {presetTodos.map((p) => (
            <button
              key={p.id}
              className="preset-button"
              onClick={() => addPresetTodo(p.text)}
            >
              {p.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

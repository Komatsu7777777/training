import React, { useState } from "react";
import "./styles.css";
import { Complete } from "./components/complete";
import { Incomplete } from "./components/incomplete";
import { Input } from "./components/input";

export const App = () => {
  const [todoText, addTodotext] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const inputText = (event) => addTodotext(event.target.value);
  const addText = () => {
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    addTodotext("");
  };
  const deleteIncompleteTodo = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const addCompleteTodo = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
    const NewcompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(NewcompleteTodos);
  };
  const modosu = (index) => {
    const newTodos = [...completeTodos];
    newTodos.splice(index, 1);
    setCompleteTodos(newTodos);
    const NewincompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(NewincompleteTodos);
  };
  return (
    <>
      <Input
        inputText={inputText}
        todoText={todoText}
        incompleteTodos={incompleteTodos}
        addText={addText}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるのは5個までです。消化してください
        </p>
      )}
      <Incomplete
        incompleteTodos={incompleteTodos}
        addCompleteTodo={addCompleteTodo}
        deleteIncompleteTodo={deleteIncompleteTodo}
      />
      <Complete completeTodos={completeTodos} modosu={modosu} />
    </>
  );
};

import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, addTodotext] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "あああああ",
    "いいいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["ううううう"]);
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
      <div className="inputarea">
        <input
          placeholder="TODOを入力"
          onChange={inputText}
          value={todoText}
        ></input>
        <button onClick={addText}>追加</button>
      </div>
      <div className="incompletearea">
        <p className="title">未完了のTODO</p>
        <div>
          <ul>
            {incompleteTodos.map((todo, index) => {
              return (
                <div key={todo} className="list-low">
                  <li>{todo}</li>
                  <button onClick={() => addCompleteTodo(index)}>完了</button>
                  <button onClick={() => deleteIncompleteTodo(index)}>
                    削除
                  </button>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="completearea">
        <p className="title">完了のTODO</p>
        <div>
          <ul>
            {completeTodos.map((todo, index) => {
              return (
                <div key={todo} className="list-low">
                  <li>{todo}</li>
                  <button onClick={() => modosu(index)}>戻す</button>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

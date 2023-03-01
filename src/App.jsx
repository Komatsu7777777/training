import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, addTodotext] = useState("");
  const [incompleteTodos, addIncompleteTodos] = useState([
    "あああああ",
    "いいいいい"
  ]);
  const inputText = (event) => addTodotext(event.target.value);
  const addText = () => {
    const newTodos = [...incompleteTodos, todoText];
    addIncompleteTodos(newTodos);
  };
  return (
    <>
      <div className="inputarea">
        <input placeholder="TODOを入力" onChange={inputText}></input>
        <button onClick={addText}>追加</button>
      </div>
      <div className="incompletearea">
        <p className="title">未完了のTODO</p>
        <div>
          <ul>
            {incompleteTodos.map((todo) => {
              return (
                <div key={todo} className="list-low">
                  <li>{todo}</li>
                  <button>完了</button>
                  <button>削除</button>
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
            <div className="list-low">
              <li>ううううう</li>
              <button>戻す</button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

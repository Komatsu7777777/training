import React from "react";

export const Incomplete = (purops) => {
  const { incompleteTodos, addCompleteTodo, deleteIncompleteTodo } = purops;

  return (
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
  );
};

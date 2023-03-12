import React from "react";

export const Complete = (purops) => {
  const { completeTodos, modosu } = purops;
  return (
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
  );
};

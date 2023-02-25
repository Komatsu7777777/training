import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="inputarea">
        <input placeholder="TODOを入力"></input>
        <button>追加</button>
      </div>
      <div className="incompletearea">
        <p>未完了のTODO</p>
        <div>
          <ul>
            <div>
              <li>あああああ</li>
              <button>完了</button>
              <button>削除</button>
            </div>
            <div>
              <li>いいいいい</li>
              <button>完了</button>
              <button>削除</button>
            </div>
          </ul>
        </div>
      </div>
      <div className="completearea">
        <p>完了のTODO</p>
        <div>
          <ul>
            <div>
              <li>ううううう</li>
              <button>戻す</button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

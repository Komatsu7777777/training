export const Input = (props) => {
  const { inputText, todoText, incompleteTodos, addText } = props;
  return (
    <div className="inputarea">
      <input
        placeholder="TODOを入力"
        onChange={inputText}
        value={todoText}
        disabled={incompleteTodos.length >= 5}
      ></input>
      <button disabled={incompleteTodos.length >= 5} onClick={addText}>
        追加
      </button>
    </div>
  );
};

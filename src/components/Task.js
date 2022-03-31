import React from "react";

function Task({ text, category, onDeleteCategory }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button
        onClick={() => onDeleteCategory({ category: category, text: text })}
        className="delete"
      >
        X
      </button>
    </div>
  );
}

export default Task;
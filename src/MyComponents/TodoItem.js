import React from "react";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="container">
      <h5 className="">{todo.title}</h5>
      <p>{todo.desc}</p>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>
    </div>
  );
};

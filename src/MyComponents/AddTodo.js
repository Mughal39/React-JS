import React, { useState } from "react";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be same");
    }
    props.addTodo(title, desc);
  };
  return (
    <div className="container my-3">
      <h3>Add Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label for="Title" className="form-label">
            Todo Title
          </label>
          <input
            type="Text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="Title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="Desc" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};

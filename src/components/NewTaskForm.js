import { React, useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskInfo, setTaskInfo] = useState({ text: "", category: "" });
  function submitHandler(e) {
    e.preventDefault();
    onTaskFormSubmit(taskInfo);
  }
  return (
    <form onSubmit={submitHandler} className="new-task-form">
      <label>
        Details
        <input
          onChange={(e) =>
            setTaskInfo((prev) => ({ ...prev, text: e.target.value }))
          }
          type="text"
          name="text"
        />
      </label>
      <label>
        Category
        <select
          name="category"
          onChange={(e) =>
            setTaskInfo((prev) => ({ ...prev, category: e.target.value }))
          }
        >
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
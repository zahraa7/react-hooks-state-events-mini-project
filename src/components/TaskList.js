import { React } from "react";
import Task from "./Task";
import { v4 as uuidv4 } from "uuid";

function TaskList({ tasks, onDeletedItem }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          onDeleteCategory={(e) => {
            onDeletedItem(e);
          }}
          key={uuidv4()}
          text={task.text}
          category={task.category}
        />
      ))}
    </div>
  );
}

export default TaskList;
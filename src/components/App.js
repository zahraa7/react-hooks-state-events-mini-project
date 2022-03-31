import { React, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [categorySelect, setCategorySelect] = useState(`All`);
  const [allTasks, setAllTasks] = useState(TASKS);

  const displayItems = Object.values(allTasks).filter((item) => {
    //create new displayItems to filter deleted tasks
    // because this re-render the deleted ones
    if (categorySelect === "All") {
      return item;
    } else if (item.category === categorySelect) {
      return item;
    } else {
      return null;
    }
  });

  function addTaskHandler(e) {
    setAllTasks((prev) => [...prev, e]);
  }

  function deleteTaskHandler(e) {
    allTasks.filter((task) => {
      if (task.category === e.category) {
        return false;
      } else {
        return setAllTasks(task);
      }
    });
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        selectedCategory={categorySelect}
        onButtonClick={(e) => setCategorySelect(e)}
        categories={CATEGORIES}
      />
      <NewTaskForm onTaskFormSubmit={addTaskHandler} categories={CATEGORIES} />
      <TaskList onDeletedItem={deleteTaskHandler} tasks={displayItems} />
    </div>
  );
}

export default App;
// App.js
import React, { useState } from 'react';
import TaskForm from './components/taskForm';
import TaskList from './components/taskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  const markCompleted = (taskToComplete) => {
    setTasks(tasks.filter((task) => task !== taskToComplete));

  };

  return (
    <div>
      <h1>Todo List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} markCompleted={markCompleted} />
    </div>
  );
}

export default App;

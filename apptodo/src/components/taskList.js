// TaskList.js
import React from 'react';
import TaskItem from './taskItem';

function TaskList({ tasks, deleteTask, markCompleted }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          deleteTask={deleteTask}
          markCompleted={markCompleted}
        />
      ))}
    </div>
  );
}

export default TaskList;

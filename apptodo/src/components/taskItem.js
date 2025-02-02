// TaskItem.js
import React from 'react';
import TaskActions from './taskActions';

function TaskItem({ task, deleteTask, markCompleted }) {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Assigned to: {task.assignee}</p>
      <p>Due date: {task.dueDate}</p>
      <p>Assignor: {task.assignor}</p>
      <TaskActions
        task={task}
        deleteTask={deleteTask}
        markCompleted={markCompleted}
      />
    </div>
  );
}

export default TaskItem;

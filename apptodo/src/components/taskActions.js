import React from 'react';

function TaskActions({ task, deleteTask, markCompleted }) {
  return (
    <div>
      <button onClick={() => markCompleted(task)}>Mark as Completed</button>
      <button onClick={() => deleteTask(task)}>Delete Task</button>
    </div>
  );
}

export default TaskActions;

import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [task, setTask] = useState({
        title: '',
        description: '',
        assignee: '',
        dueDate: '',
        assignor: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task);     //ye function dusre file se pass hua hai (jab form submit hoga tab task add ho jayega)
        setTask({
            title: '',
            description: '',
            assignee: '',
            dueDate: '',
            assignor: '',
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Task Title : </label>
                <input
                    type="text"
                    name="title"
                    value={task.title}
                    onChange={handleChange}
                    placeholder="Task Title"
                    required
                /><br /><br />
                <label>Add task summary: </label>
                <textarea
                    name='description'
                    value={task.description}
                    onChange={handleChange}
                    placeholder='Add task summary here'
                    required
                /><br /><br />
                <label>select assignee</label>
                <select
                    name="assignee"
                    value={task.assignee}
                    onChange={handleChange}
                    required
                >
                    <option value="">select</option>
                    <option value="assignee1">Raj</option>
                    <option value="assignee2">Adarsh</option>
                    <option value="assignee3">Sidhant</option>
                    <option value="assignee4">Manya</option>
                    <option value="assignee5">Iram</option>
                </select><br /><br />
                <label>Date: </label>
                <input
                    type="date"
                    name="dueDate"
                    value={task.dueDate}
                    onChange={handleChange}
                    required
                /><br /><br />
                <>Assignor</>
                <input
                    type="text"
                    name="assignor"
                    value="Sir"
                    onChange={handleChange}
                    placeholder="Task Assignor"
                    required
                /><br /><br />
                <button type="submit">Add Task</button>
            </form>
        </>
    );
};

export default TaskForm;
import { useState } from "react";

const Taskform = ({setTaskList}) => {
    const [task, setTask] = useState("");
    const [task2, setTask2] = useState("");
    const [assignee, setAssignee] = useState('Raj');

    const handleSubmit = () => {
        const obj = {
            task,
            task2,
            assignee,
            assignor : "Sir",

        };
        setTaskList((prev) => {
            const newArr = [...prev];
            newArr.push(obj);
            return newArr;
        });
    };

    return (
        <>
            <p className="taskForm-p">Hello from Taskform!</p>
            <div className="user-task-input">
            <label>Work Title: </label>
            <input
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            </div>

            <div className="user-task-input">
            <label>Enter the Task: </label>
            <input
                value={task2}
                onChange={(e) => setTask2(e.target.value)}
            />
            </div>

            <div className="user-task-input">
            
            <label>Assignee</label>
                <select
                    value={assignee}
                    onChange={(e) => {
                        setAssignee(e.target.value);
                    }}
                >
                    <option value="Raj">Raj</option>
                    <option value="mnaya">Manya</option>
                    <option value="adarsh">adarsh</option>
                </select>
            </div>


            <button onClick={handleSubmit}>SUBMIT</button>
        </>
    );
};

export default Taskform;

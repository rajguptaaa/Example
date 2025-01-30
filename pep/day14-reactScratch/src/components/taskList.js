import './taskForm'
const Tasklist = ({taskList}) => {
    console.log(taskList);
    return(
        <>
            {taskList.map((ele=>{
                return(
                    <div>
                    <p>Task: {ele.task}</p>
                    <p>Summary: {ele.task2}</p>
                    <p>Assigned to:{ele.assignee}</p>
                    <p>Assiginor: {ele.assignor}</p>
                    </div>
                )
            }))

            }
        </>
    );
};
export default Tasklist;

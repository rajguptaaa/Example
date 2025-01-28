function TaskPage() {
    const domPlay = (e) =>{
        console.log(e.target.value);
    };
    return(
        <div className="task-page">
            <h2 >This is a task page</h2>
            <input 
               className="user-input"
               onChange={domPlay}
            />
        </div>
    )
}
export default TaskPage;
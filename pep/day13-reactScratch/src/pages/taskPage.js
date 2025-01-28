import { useState } from "react";
// function TaskPage() {

//     let [username, setUsername] = useState('Raj')

//     const domPlay = (e) =>{
//         setUsername(e.target.value);
//     };
//     return(
//         <div className="task-page">
//             <h2 >Welcome to the Task Page:  {username}</h2>
//             <input 
//                className="user-input"
//                onChange={domPlay}
//             />
//         </div>
//     )
// }
// export default TaskPage;

// ----------------------------------------------------------------------

const Form = () => {

    let [name, setName] = useState('')
    let [place, setPlace] = useState('');
    let [designation, setDesignation] = useState('');

    const domName = (e) => {
        setName(e.target.value);

    };
    const domPlace = (e) => {
        setPlace(e.target.value);
    };
    const domDesigination = (e) => {
        setDesigination(e.target.value);
    };

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setSubmitted(true);
    };

    return (
        <>
            <h2>Welcome</h2>
            <h3>Form: </h3>
            <label>Enter your name here: </label>
            <input
                className="user-name-input"
                value={name}
                onChange={(e) => setName(e.target.value)} // Use onChange for input
            /><br />
            <label>Where are you from: </label>
            <input
                className="user-place-input"
                value={place}
                onChange={(e) => setPlace(e.target.value)} // Use onChange for input
            /><br />
            <label>Desigination: </label>
            <input
                className="user-desigination-input"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)} // Use onChange for input
            /><br />
            <button onClick={handleSubmit} className="submit-btn">SUBMIT</button>
            {submitted && (
                <>
                    <h4>Submission Result:</h4>
                    <h2>Hello! {name}, from {place}</h2>
                    <h2>{designation}</h2>
                </>
            )}
        </>
    )
}
export default Form;
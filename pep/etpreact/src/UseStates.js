// import React, {useState} from 'react';
// const UseStates = () => {
//     const initialVal = 0;
//     const [count, setCount] = useState(initialVal);
//     const Inc = () => {
//         setCount(count + 1);
//     }
//     const Dec = () => {
//         if(count > 0)
//         setCount(count - 1);
//     }

//     const Reset = () => {
//         setCount(initialVal);
//     }

//     return(
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={Inc}>Inc</button>
//             <button onClick={Dec}>Dec</button>
//             <button onClick={Reset}>Reset</button>
//         </div>
//     );
// }
// export default UseStates;

// import React, { useState, useEffect } from 'react';
// const UseStates = () => {
//     const [name, setName] = useState('Raj');
//     useEffect(() => {
//         if (name !== 'Raj') {
//             alert(`Name has been changed to ${name}`);
//         }
//     }, [name]);
//     const Change = () => {
//         setName("Gupta");
//     };
//     return (
//         <div>
//             <p><span style={{ color: "blue" }}>hello!</span> my name is {name}</p>
//             <button onClick={Change}>Click here to change the name</button>
//         </div>
//     );
// };
// export default UseStates;


import React, { useState } from 'react';
const UseStates = () => {
    const [inputname, setInputName] = useState('');

    const Handle = (e) => {
        setInputName(e.target.value);
    }
    const Done = () => {
        console.log(inputname);
        alert('Done!!!');
    }
    return(
        <div>
            <p>Hello! {inputname}</p>
            <input
                type='text'
                value={inputname}
                placeholder="type here..."
                onChange={Handle}
            />
            <button type='submit' onClick={Done}>click</button>
        </div>
    ) 
};
export default UseStates;


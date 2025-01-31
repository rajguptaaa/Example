// import React, { useState } from 'react';
// const ToggelColor = () => {
//     const [color, setColor] = useState('white');
//     const handleClick = () => {
//         setColor('black');
//     }
//     const reset = () => {
//         setColor('white')
//     }
//     return(
//         <body style={{backgroundColor:color, height:"1000vh"}}>
//         <button onClick={handleClick}>Click</button>
//         <button onClick={reset}>reSet</button>

//         </body>
//     );
// }
// export default ToggelColor;

import React, { useState } from 'react'
const ToggelColor = () => {
    const [color, setColor] = useState('pink')
    const changeColor = () => {
    const colors = ['white', 'black', 'red', 'yellow', 'blue', 'orange', 'pink']
    const toggle = colors[Math.floor(Math.random()*color.length)];
    setColor(toggle);
    }
    return(
        <body style={{backgroundColor:color, height:"1000vh"}}>
        <button onClick={changeColor}>Click</button>
        </body>
    );
}
export default ToggelColor;





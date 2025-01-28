// import React from 'react';
// console.log(React);

import React from 'react';
import ReactDOM from 'react-dom/client';
import TaskPage from './src/pages/taskPage';

const domRoot = document.getElementById('dom-root');
const reactRoot = ReactDOM.createRoot(domRoot);

const App = () =>{
    return(
        <>
            <h1>hello</h1>
            <h2>Hello from app.js</h2>
            <TaskPage />
        </>

    );
};
reactRoot.render(App());
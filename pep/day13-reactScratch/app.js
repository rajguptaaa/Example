// import React from 'react';
// console.log(React);

import React from 'react';
import ReactDOM from 'react-dom/client';
// import TaskPage from './src/pages/taskPage';
import Form from './src/pages/taskPage'

const domRoot = document.getElementById('dom-root');
const reactRoot = ReactDOM.createRoot(domRoot);

const App = () =>{
    return(
        <>
            {/* <TaskPage /> */}
            <Form />
        </>

    );
};
reactRoot.render(App());
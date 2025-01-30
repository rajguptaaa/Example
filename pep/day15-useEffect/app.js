import React from 'react';
import ReactDOM from 'react-dom/client';

const domRoot = document.getElementById('dom-root');
const reactRoot = ReactDOM.createRoot(domRoot);

const App = () => {
    return(
        <React.Fragment>

        </React.Fragment>
    );
};
reactRoot.render(<App />);

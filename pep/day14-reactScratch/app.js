import React from 'react';
import ReactDOM from 'react-dom/client';
import Youtube from './src/pages/Youtube';
import { BrowserRouter, Routes, Route } from 'react-router';
import VideoPlayer from './src/components/videoPlayer';

const domRoot = document.getElementById('dom-root');
const reactRoot = ReactDOM.createRoot(domRoot);

const App = () => {
    return(
            <BrowserRouter>
            {/* <Youtube /> */}
            <Routes>
                <Route path='/' element={<Youtube />}/>
                <Route path='/video/:videoId' element={<VideoPlayer/>}/>
            </Routes>
            </BrowserRouter>
    );
};
reactRoot.render(<App />);

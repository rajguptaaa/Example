// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import { Home } from './Home';
import { Destination } from './Destination';

const App = () => {
  return (
    <Router>
      <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/destination" element={<Destination />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

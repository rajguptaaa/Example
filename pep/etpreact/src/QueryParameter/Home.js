import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Click below to go to the destination page with query parameters:</p>
      <Link to="/destination?name=Raj&age=21">Go to Destination</Link>
    </div>
  );
};

export { Home };

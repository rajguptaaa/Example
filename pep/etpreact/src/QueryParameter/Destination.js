import React from 'react';
import { useLocation } from 'react-router-dom';

const Destination = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');
  const age = queryParams.get('age');

  return (
    <div>
      <h1>Destination Page</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export { Destination };

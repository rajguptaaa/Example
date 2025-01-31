import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  // Access the state using useSelector
  const count = useSelector((state) => state.count);

  // Dispatch actions using useDispatch
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;

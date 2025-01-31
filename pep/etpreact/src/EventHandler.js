import React, { useState } from 'react';

const EventHandler = () => {
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
    <center style={{padding: "50px"}}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <p>
        <strong>Input Value:</strong>{inputValue}
      </p>
      </center>
    </div>
  );
};

export default EventHandler;

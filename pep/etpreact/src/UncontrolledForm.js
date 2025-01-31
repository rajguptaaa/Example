import React, { useRef } from 'react';
const UncontrolledForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;

    console.log("Name:", name);
    console.log("Email:", email);

    e.target.reset();
  };

  return (
    <div>
      <h2>Form </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              ref={nameRef}
              placeholder="Enter your name"
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              ref={emailRef}
              placeholder="Enter your email"
            />
          </label>
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UncontrolledForm;

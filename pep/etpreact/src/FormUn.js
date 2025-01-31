import React, { useRef } from 'react';
const FormUn = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;

        console.log("Name : ", name);
        console.log("Email : ", email);

        e.target.reset();
    }
    return(
        <div>
        <p> UncontrolledForm </p>
        <form onSubmit={handleSubmit}>
        <label>Name : 
            <input 
                type='text'
                ref={nameRef}
                placeholder='Enter your name here...'
            />
        </label>
        <label>  Email : 
            <input 
                type='email'
                ref={emailRef}
                placeholder='enter your email here...'
            />
        </label>
        <button type='submit'>Submit</button>

        </form>
        </div>
    );
}
export default FormUn;
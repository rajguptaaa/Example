import React, { useState, useEffect } from 'react';

const Form = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        if (formSubmitted) {
            alert("Form submitted successfully!");
            setFormSubmitted(false);
        }
    }, [formSubmitted]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            username,
            email,
            dob,
            password,
            confirmPassword,
        });

        if (password.length < 8) {
            alert("Password must be at least 8 characters long");
        } else if (password !== confirmPassword) {
            alert("Passwords do not match");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Invalid email format");
        } else {
            setFormSubmitted(true);
            resetForm();
        }
    };

    const resetForm = () => {
        setUserName('');
        setEmail('');
        setDob('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type='text' value={username} onChange={(e) => setUserName(e.target.value)} placeholder='Enter your name here' />
                <br /><br />

                <label>Email: </label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email here' />
                <br /><br />

                <label>DOB: </label>
                <input type='date' value={dob} onChange={(e) => setDob(e.target.value)} />
                <br /><br />

                <label>Password: </label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password here' />
                <br /><br />

                <label>Confirm Password: </label>
                <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Re-enter your password here' />
                <br /><br />

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Form;




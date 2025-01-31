import React, { useState } from 'react';

const Arraycurd = () => {
    const [users, setUsers] = useState([
        // { id: 1, name: 'John', age: 25 },
        // { id: 2, name: 'Jane', age: 30 },
        // { id: 3, name: 'Bob', age: 22 }
    ]);

    const randomUsers = ([
        { id: 4, name: 'jonny', age: 25 },
        { id: 5, name: 'jonson', age: 30 },
        { id: 6, name: 'Boby', age: 22 }
    ])

    // Function to add a new user
    const addUser = () => {
        const newUser = randomUsers[Math.floor(Math.random() * randomUsers.length)];
        setUsers(prevUsers => [...prevUsers, newUser]);
    };

    // Function to update the age of a user by ID
    const updateUserAge = (id, newAge) => {
        setUsers(prevUsers =>
            prevUsers.map(user =>
                user.id === id ? { ...user, age: newAge } : user
            )
        );
    };

    // Function to delete a user by ID
    const deleteUser = (id) => {
        setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
    };

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                          {user.name} 
                          (Age: {user.age})
                        <button onClick={() => updateUserAge(user.id, user.age + 1)}>Increase Age</button>
                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={addUser}>Add User</button>
        </div>
    );
};

export default Arraycurd;











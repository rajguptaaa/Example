import React from 'react';
import User from './User';
import img1 from './image.png';

const App = () => {
  const users = [
    { name: 'Raj', email: 'kumaaraj11@gmail.com', age: 21, city: 'Mumbai', image: img1 },
    { name: 'Anita', email: 'anita.mehta@example.com', age: 25, city: 'Delhi', image: img1 },
    { name: 'Ravi', email: 'ravi.sharma@example.com', age: 30 , image:img1}
  ];

  return (
    <div>
      <center>
        {users.map((user, index) => (
          <User 
            key={index} 
            image={user.image}
            name={user.name} 
            email={user.email} 
            age={user.age} 
            city={user.city} 
          />
        ))}
      </center>
    </div>
  );
}

export default App;

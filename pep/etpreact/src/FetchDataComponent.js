import React, { useState, useEffect } from 'react';
import axios from 'axios'
const FetchDataComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
      setData(response.data);
      setLoading(false);
    })
    .catch((error)=>{
      setError(error.message)
      setLoading(false);
    })

  },[setData])

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
          {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchDataComponent;

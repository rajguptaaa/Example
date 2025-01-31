import React, { useState } from 'react';

const PostFromData = () => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    userId: ''
  });
  // Function to reset form data
  const resetData = () => ({
    title: '',
    body: '',
    userId: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      console.log('Submitted Data:', result);

      // Reset form after successful submission
      setFormData(resetData());
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Submit Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title: <br />
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Body: <br />
            <textarea
              name="body"
              value={formData.body}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            User ID: <br />
            <input
              type="number"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit" style={{ marginTop: '10px', padding: '10px 20px' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostFromData;

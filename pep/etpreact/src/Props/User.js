import React from 'react';
const User = (props) => {
  const { image, name, email, age, city } = props;

  const style = {
    backgroundColor: "#f0f8ff",
    color: "blue",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    margin: "10px 0",
    maxWidth: "300px",
    border: "1px solid #ccc",
    cursor: "pointer",
    textAlign: "center"
  };
  const imgStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px"
  };
  return (
    <div style={style}>
      {image && <img src={image} alt="User Avatar" style={imgStyle} />}
      <h2>{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>City:</strong> {city ? city : 'City not provided'}</p>
    </div>
  );
}
export default User;

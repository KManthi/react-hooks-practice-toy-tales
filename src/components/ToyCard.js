import React from "react";
import axios from "axios";

function ToyCard({ toy, onDeleteToy }) {
  const { id, name, image, likes } = toy;

  function handleDeleteClick() {
    axios.delete(`http://localhost:3001/toys/${id}`)
    .then(() => {
      onDeleteToy(id);
    })
    .catch(error => console.error("Error deleting toy:", error))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;

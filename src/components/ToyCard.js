import React from "react";
import axios from "axios";

function ToyCard({ toy, onDeleteToy, onUpdateLikes }) {
  const { id, name, image, likes } = toy;

  function deleteClick() {
    axios.delete(`http://localhost:3001/toys/${id}`)
    .then(() => {
      onDeleteToy(id);
    })
    .catch(error => console.error("Error deleting toy:", error))
  }

  function addLikeClick() {
    axios.patch(`http://localhost:3001/toys/${id}`, {likes: likes + 1})
    .then(()=> {
      onUpdateLikes(id);
    })
    .catch(error => console.error("Error adding like:", error))
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
      <button className="like-btn" onClick={addLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={deleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;

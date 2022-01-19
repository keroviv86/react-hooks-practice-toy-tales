import React from "react";

function ToyCard({id, toy, name, image, likes, handleLikes, handleDelete}) {
  function onHandleLikes(){
    handleLikes(id)
  }

  function onHandleDelete(){
    //persist changes on server
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      handleDelete(id)
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
      <button onClick= {onHandleLikes} className="like-btn">Like {"<3"}</button>
      <button onClick= {onHandleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;

import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({getToys, handleLikes, handleDelete}) {

  
  const displayToys = getToys.map((toy)=>(
    <ToyCard 
      key={toy.id}
      id={toy.id}
      name = {toy.name}
      image = {toy.image}
      likes= {toy.likes}
      handleLikes = {handleLikes}
      handleDelete={handleDelete}
    />
  ))
  return (
    <div id="toy-collection">{displayToys}</div>
  );
}

export default ToyContainer;


import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [getToys, setGetToys]= useState([]); 

  useEffect(()=> {
    fetch("http://localhost:3001/toys")
    .then(res=>res.json())
    .then(data=> setGetToys(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleLikes(id){
    const updateLikes = getToys.map((toy)=>{
      if(toy.id === id){
        return {...toy, likes: toy.likes + 1}
      }
      return toy
    })
    setGetToys(updateLikes);

    // fetch(`http://localhost:3001/toys/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(getToys.filter((toy) => toy.id == id))
    // })
    // .then(r=>r.json)
    // .then(handleLikes)
  }

  function handleDelete(id){
    const deletePost = getToys.filter((toy)=>{
      return (toy.id !== id)
    })
    setGetToys(deletePost)
  }
  
  function handleSubmit(newObj){
    setGetToys([...getToys, newObj])
  }



  return (
    <>
      <Header />
      {showForm ? <ToyForm handleSubmit={handleSubmit}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer getToys= {getToys} handleLikes= {handleLikes} handleDelete= {handleDelete}/>
    </>
  );
}

export default App;

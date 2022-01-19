import React, {useState} from "react";

function ToyForm({handleSubmit}) {
  const[name, setName]= useState("")
  const[image, setImage]= useState("")
  
  function handleName(e){
    setName(e.target.value)
  }

  function handleImage(e){
    setImage(e.target.value)
  }

  function onHandleSubmit(event){
    event.preventDefault();
    const newObj= {
      name:name,
      image:image,
      likes:0
    }

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newObj)
    })
    .then(r=>r.json())
    .then(newToy=> handleSubmit(newToy))
    setName("")
    setImage("")
  }




  // function makeNewToy(e){
  //   e.preventDefault()
  //   fetch("http://localhost:3001/toys", {
  //     method: "POST",
  //     headers: {
  //       "Content-type" : "application/json"
  //     },
  //     body: JSON.stringify({
  //       name, 
  //       image
  //     })
  //   }).then(response => response.json())
  //   .then(newToy => addToy(newToy))
  //   setName("")
  //   setImage("")
  // }
  return (
    <div className="container">
      <form onSubmit= {onHandleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleName}
          value={name}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleImage}
          value={image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
          
        />
      </form>
    </div>
  );
}

export default ToyForm;

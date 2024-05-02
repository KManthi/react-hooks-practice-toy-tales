import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/toys')
    .then(r => {
      setToys(r.data);
    })
    .catch(error => console.error('Error fetching toys:', error))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy(newToy) {
    setToys([...toys, newToy])
  }

  function deleteToy(toyId) {
    const updatedToy = toys.filter((toy) => toy.id !== toyId);
    setToys(updatedToy);
  } 

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
      toys={toys}
      onDeleteToy={deleteToy}
      />
    </>
  );
}

export default App;

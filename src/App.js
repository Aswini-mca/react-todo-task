import { useState } from 'react';
import './App.css';

function App() {
  //todo list array of objects 
  const cardDetails = [{
    name: "Price Card Task",
    description: "Do this task using react.js",
    status: "Not Completed"
  },
  {
    name: "Shopping Cart Task",
    description: "user able to add items to cart",
    status: "Not Completed"
  },
  {
    name: "toDo Task",
    description: " It should do All CRUD Functionalities",
    status: "Not Completed"
  }
  ]

  const [todo, setToDo] = useState(cardDetails);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  //for deleting todo
  const deleteToDo = (index) => {
    const newtodos = todo.filter((_, i) => i !== index);
    setToDo(newtodos);
  }
  //for editing todo
  const editTodo = (id, newText) => {
    const updatedTodo = todo.map(todo => todo.id === id ? { ...todo, text: newText } : todo)
    setToDo(updatedTodo);
  }
  return (
    <div className="App">
      <h2 className='container heading'>My todo</h2>
      <div className='container d-flex  justify-content-center mt-3 gap-3 top-container'>
        <input type='text' placeholder='ToDo Name' size='35' onChange={(event) => setName(event.target.value)} value={name}></input>
        <input type='text' placeholder='ToDo Description' size='35' onChange={(event) => setDescription(event.target.value)} value={description}></input>
        <button className='add-button btn'
          onClick={() => {
            const newToDo = {
              name: name,
              description: description
            };
            setToDo([...todo, newToDo]);
          }}>Add ToDo</button>
      </div>
      <div className='container d-flex justify-content-center m-5 middle-container'>
        <p><b>My ToDos</b></p>
        <label className='right' for='category'><b>Status Filter : </b></label>
        <select id='category'>
          <option id='opt-1'>All</option>
          <option id='opt-2'>Completed</option>
          <option id='opt-3'>Not Completed</option>
        </select>
      </div>
      {/* mapping for card component */}
      <div className='card-container'>
        {todo.map((card, index) => (
          <Card card={card} id={index} deleteToDo={deleteToDo} ediTodo={editTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;

function Card({ card, id, deleteToDo, ediTodo }) {
  return (
    <div className='card-outer card-body'>
      <p>Name : {card.name}-{id + 1}</p>
      <p>Description : {card.description}</p>
      <label>Status </label>
      <select defaultValue={'Not Completed'}>
        <option>Not Completed</option>
        <option>Completed</option>
      </select>
      <div className='card-innerContainer'>
        <button className='button-edit btn-success' onClick={() => { ediTodo(id, "updated"); alert("You can edit the todo list in the above provided Input box") }}>Edit</button>
        <button className='button-delete btn-danger' onClick={() => { deleteToDo(id); alert("Deleted Successfully") }}>Delete</button>
      </div>
    </div>
  )
}

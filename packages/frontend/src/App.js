import React from "react"
import { useState } from "react"
import "./App.css"

function App() {
  const [newItem, setNewItem] = useState("")
  const [routines, setRoutines] = useState([])

  // function to use with the onSubmit event listener to enable the 'Add' button
  function handleSubmit(e) {
    //prevent page from refreshing
    e.preventDefault()
    // the arrow function modifies the current value (currentRoutines) to return the new value of setRoutines
    setRoutines(currentRoutines => {
      return [
        ...currentRoutines, 
        {id: crypto.randomUUID(), title: newItem, completed: false}
      ]
    })
  // set setNewItem to an empty array to clear the previous item typed in
    setNewItem("")
  }

  // function to toggle the checkbox
  function toggleRoutine(id, completed) {
    setRoutines(currentRoutines => {
      return currentRoutines.map(routine => {
        // check the id from the onChange event
        if (routine.id === id) {
          // to change state, a new state object (...routine) needs to be created to change one property (completed), then return the new updated routine
          return {...routine, completed}
        }
        return routine
      })
    })
  }

  // function for the delete button onClick event listener
  function deleteRoutine(id) {
    setRoutines(currentRoutines => {
      // return all the routines with ids NOT equal to the id from the onClick event
      return currentRoutines.filter(routine => routine.id !== id)
    })
  }

  return (
    //fragment <> instead of div to combine elements
    <>
    {/* the onSubmit event listener is used to enable the 'Add' hutton using the handleSubmit function */}
  <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input 
        value={newItem} 
        // onChange is called every time a key is clicked
        onChange={e => setNewItem(e.target.value)} 
        type="text" id="item" />
    </div>
    <button className="btn">Add</button>
  </form>
    <h1 className="header">Daliy Routine</h1>
    <ul className="list">
    {/* message for when the routine list is empty, using short circuting */}
      {routines.length === 0 && "No Routines"}
      {routines.map(routine => {
        return (
          // add key to create a unique key prop so that items to be modified can be identified
          <li key={routine.id}>
            <label>
              <input 
                type="checkbox" 
                checked={routine.completed}
                // onChange event listener calls the toggleRoutine function for the id and whether it's checked
                onChange={e => toggleRoutine(routine.id, e.target.checked)}
              />
              {routine.title}
            </label>
            {/* onClick event listener for delete button passes a function which calls the deleteRoutine function */}
            <button 
              onClick={() => deleteRoutine(routine.id)}
              className="btn btn-danger">Delete
            </button>
          </li>
        )
      })}
    </ul>
  </>
  )
}

export default App;

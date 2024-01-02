import React from "react"
import { useState, useEffect } from "react"
import NewRoutineForm from "./NewRoutineForm"
import RoutineList from "./RoutineList"

import "./App.css"

function App() {
  const [routines, setRoutines] = useState(() => {
    // to get items from local storage (replace this with MongoDB)
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []

    return JSON.parse(localValue)
    }
    )

  // to place items in local storage (replace this with MongoDB)
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(routines))
  }, [routines] // useEffect runs function () every time routines changes
  )

  // function for NewRoutineForm routines state
  function addRoutine(title) {
    // the arrow function modifies the current value (currentRoutines) to return the new value of setRoutines
    setRoutines(currentRoutines => {
      return [
        ...currentRoutines, 
        {id: crypto.randomUUID(), title, completed: false}
      ]
    })
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
    <div className="routine-app">
      <h1 className="header">Quote of the Day...</h1>
      <NewRoutineForm onSubmit={addRoutine} />
      <h1 className="header">Daily Routine</h1>
      <RoutineList 
        routines={routines} 
        toggleRoutine={toggleRoutine} 
        deleteRoutine={deleteRoutine} />
    </div>
  )
}

export default App;

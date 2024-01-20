import React, { useState, useEffect } from "react"
import NewRoutineForm from "./NewRoutineForm"
import RoutineList from "./RoutineList"
import DailyQuote from "./daily_quotes/QuoteApp"
import "./App.css"
import "./BackgroundStyle.scss"

function App() {

  // const [routines, setRoutines] = useState([])

  // const { MongoClient } = require("mongodb")
  // const uri = require("./atlas_uri.js")
  
  // console.log(uri)

  // const client = new MongoClient(uri)
  // const dbname = "bank"

  // const connectToDatabase = async () => {
  //   try {
  //     await client.connect();
  //     console.log(`Connected to the ${dbname} database`);
  //   } catch (err) {
  //     console.error(`Error connecting to the database: ${err}`)
  //   }
  // };

  // const main = async () => {
  //   try {
  //     await connectToDatabase();
  //   } catch (err) {
  //     console.error(`Error connecting to the database: ${err}`);
  //   } finally {
  //     await client.close();
  //   }
  // };
  // // run the main function
  // main();


  const [routines, setRoutines] = useState(() => {
    // to get items from local storage (replace this with MongoDB)
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []

    return JSON.parse(localValue)
    })

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

  function editRoutine(id) {
    setRoutines(currentRoutines => {
      return currentRoutines.map(routine => {
        // check the id from the onChange event
        if (routine.id === id) {
          // to change state, a new state object (...routine) needs to be created to change one property (completed), then return the new updated routine
          return {...routine, isEditing: !routine.isEditing}
        }
        return routine
      })
    })
  }

  function editItem(title, id) {
    setRoutines(currentRoutines => {
      return currentRoutines.map(routine => {
        // check the id from the onChange event
        if (routine.id === id) {
          // to change state, a new state object (...routine) needs to be created to change one property (completed), then return the new updated routine
          return {...routine, title, isEditing: !routine.isEditing}
        }
        return routine
      })
    })
  }

  return (
    <body className="gradient-bg">
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
      </div>
    <div className="routine-app">
      <h1 className="header">Quote of the Day...</h1>
      <DailyQuote />
      <NewRoutineForm onSubmit={addRoutine} />
      <h1 className="header">Daily Routine</h1>
      <RoutineList 
        routines={routines} 
        toggleRoutine={toggleRoutine} 
        editRoutine={editRoutine}
        editItem={editItem} 
        deleteRoutine={deleteRoutine} />
    </div>
    </body>
  )
}

export default App;

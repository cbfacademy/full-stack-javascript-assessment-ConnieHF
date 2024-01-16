import { useState } from "react"
import { FaRegTimesCircle } from "react-icons/fa"


function EditRoutineForm({id, editRoutine, routine, deleteRoutine}) {
    const [newItem, setNewItem] = useState(routine.title)

// function to use with the onSubmit event listener to enable the 'Add' button
function handleSubmit(e) {
    //prevent page from refreshing
    e.preventDefault()
    //if (newItem === "") return

    editRoutine(newItem, routine.id)

  // set setNewItem to an empty array to clear the previous item typed in
    setNewItem("")
  }

    return (
    <form onSubmit={handleSubmit} className="routine-item">
      <div className="wrapper">
      <label>
      <input
        className="edit-item-input"
        placeholder="Update a routine"
        value={newItem}
        // onChange is called every time a key is clicked
        onChange={e => setNewItem(e.target.value)}
        type="text" 
        id="item" />
      </label>
      <div className="icons">
              <FaRegTimesCircle 
                className="delete-icon"
                onClick={() => deleteRoutine(id)}
              />
      </div>
      </div>
      <button className="btn">Update</button>
    </form>
    )
}

export default EditRoutineForm;

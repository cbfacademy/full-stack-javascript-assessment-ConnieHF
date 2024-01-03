import { useState } from "react"

function EditRoutineForm({editRoutine, routine}) {
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
    <form onSubmit={handleSubmit} className="new-item-form">
      <input
        className="new-item-input"
        placeholder="Update a routine"
        value={newItem}
        // onChange is called every time a key is clicked
        onChange={e => setNewItem(e.target.value)}
        type="text" 
        id="item" />
    <button className="btn">Update</button>
    </form>
    )
}

export default EditRoutineForm;

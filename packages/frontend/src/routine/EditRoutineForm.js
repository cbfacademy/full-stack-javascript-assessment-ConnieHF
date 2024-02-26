import { useState } from "react"


function EditRoutineForm({editRoutine, routine, }) {
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
        <textarea
            className="edit-item-input"
            rows="4"
            // onChange is called every time a key is clicked
            onChange={e => setNewItem(e.target.value)}
          >
            {newItem}
        </textarea>
        <button className="btn">Save</button>
      </div>
    </form>
    )
}

export default EditRoutineForm;

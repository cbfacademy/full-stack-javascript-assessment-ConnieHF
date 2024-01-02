import { useState } from "react"

function NewRoutineForm({onSubmit}) {
    const [newItem, setNewItem] = useState("")

// function to use with the onSubmit event listener to enable the 'Add' button
function handleSubmit(e) {
    //prevent page from refreshing
    e.preventDefault()
    if (newItem === "") return

    // onSubmit is essentially the addRoutine function from App.js
    // can also be written props.onSubmit with 'function NewRoutineForm(props)' above
    onSubmit(newItem)

  // set setNewItem to an empty array to clear the previous item typed in
    setNewItem("")
  }

    return (
    <form onSubmit={handleSubmit} className="new-item-form">
    {/* <div className="form-row">
      <label htmlFor="item">New Item</label> */}
      <input
        className="new-item-input"
        placeholder="Add a new routine"
        value={newItem}
        // onChange is called every time a key is clicked
        onChange={e => setNewItem(e.target.value)}
        type="text" id="item" />
    {/* </div> */}
    <button className="btn">Add</button>
    </form>
    )
}

export default NewRoutineForm;

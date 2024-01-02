import { useState } from "react"

function EditRoutineForm({onSubmit}) {
    const [editItem, setEditItem] = useState("")

// function to use with the onSubmit event listener to enable the 'Add' button
function handleSubmit(e) {
    //prevent page from refreshing
    e.preventDefault()
    if (editItem === "") return

    // onSubmit is the editRoutine function from App.js
    // can also be written props.onSubmit with 'function EditRoutineForm(props)' above
    onSubmit(editItem)
    
  // set setNewItem to an empty array to clear the previous item typed in
    setEditItem("")
  }

    return (
    <form onSubmit={handleSubmit} className="new-item-form">
    {/* <div className="form-row">
      <label htmlFor="item">New Item</label> */}
      <input 
        value={editItem} 
        // onChange is called every time a key is clicked
        onChange={e => setEditItem(e.target.value)} 
        type="text" 
        id="item" 
        placeholder="Update routine"
        />
    {/* </div> */}
    <button className="btn">Update</button>
    </form>
    )
}

export default EditRoutineForm;

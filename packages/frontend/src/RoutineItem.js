function RoutineItem({ completed, id, title, toggleRoutine, deleteRoutine }) {
    return (
        <li>
            <label>
              <input 
                type="checkbox" 
                checked={completed}
                // onChange event listener calls the toggleRoutine function for the id and whether it's checked
                onChange={e => toggleRoutine(id, e.target.checked)}
              />
              {title}
            </label>
            {/* onClick event listener for delete button passes a function which calls the deleteRoutine function */}
            <button 
                onClick={() => deleteRoutine(id)}
                className="btn btn-danger">Delete
            </button>
          </li>
    )
}

export default RoutineItem;
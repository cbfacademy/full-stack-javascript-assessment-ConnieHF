import { FaEdit } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";

function RoutineItem({ completed, id, title, toggleRoutine, editRoutine, deleteRoutine }) {
    return (
        <li className="routine-item">
            <label>
              <input 
                type="checkbox" 
                checked={completed}
                // onChange event listener calls the toggleRoutine function for the id and whether it's checked
                onChange={e => toggleRoutine(id, e.target.checked)}
              />
              {title}
            </label>
            {/* onClick passes an arrow function which calls the relevant function */}
            <div className="icons">
              <FaEdit 
                className="edit-icon"
                onClick={() => editRoutine(id)}
              />
              <FaRegTimesCircle 
                className="delete-icon"
                onClick={() => deleteRoutine(id)}
              />
              {/* {id} */}
            </div>
          </li>
    )
}

export default RoutineItem;
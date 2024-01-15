import { LuClipboardEdit } from "react-icons/lu"
import { FaRegClock } from "react-icons/fa6"
import PomTimer from "./pom_timer/TimerApp"
import { useState } from "react"

function RoutineItem({ completed, id, title, toggleRoutine, editRoutine }) {
    
  const [show, setShow]=useState(false)
  
  return (
        <li className="routine-item">
          <div className="wrapper">
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
              <FaRegClock 
                className="timer-icon"
                onClick={() => setShow(!show)}
              />
              <LuClipboardEdit 
                className="edit-icon"
                onClick={() => editRoutine(id)}
              />
            </div>
          </div>
            <div className="timer-body">
              {
                show ? <PomTimer /> : null  // if show = true, show timer, else nothing
              }
            </div>
          </li>
    )
}

export default RoutineItem;
import RoutineItem from "./RoutineItem"
import EditRoutineForm from "./EditRoutineForm"

function RoutineList({ routines, toggleRoutine, editRoutine, editItem, deleteRoutine }) {
    return (
    <ul className="list">
    {/* message for when the routine list is empty, using short circuting */}
      {routines.length === 0 && "No Routines"}
      {routines.map(routine => {
                if (routine.isEditing === true) {
                return  <EditRoutineForm editRoutine={editItem} routine={routine}/>
                }
        return (
            <RoutineItem 
            // pass all the props of routine by spreading routine
            {...routine}
                id={routine.id} 
                completed={routine.completed} 
                title={routine.title}
                // unique key - key={routine.id} - prop so that items to be modified can be identified
                key={routine.id}
                toggleRoutine={toggleRoutine}
                editRoutine={editRoutine}
                deleteRoutine={deleteRoutine} />
        )
      })}
    </ul>
    )
}

export default RoutineList;
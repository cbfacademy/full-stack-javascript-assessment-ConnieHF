import RoutineItem from "./RoutineItem"

function RoutineList({ routines, toggleRoutine, deleteRoutine }) {
    return (
    <ul className="list">
    {/* message for when the routine list is empty, using short circuting */}
      {routines.length === 0 && "No Routines"}
      {routines.map(routine => {
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
                deleteRoutine={deleteRoutine} />
        )
      })}
    </ul>
    )
}

export default RoutineList;
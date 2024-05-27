const WorkoutDetails = ({ workout }) => {

    return (
      <div className="workout-details">
        <h1>hello</h1>
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Number of reps: </strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
      </div>
    )
  }
  
  export default WorkoutDetails
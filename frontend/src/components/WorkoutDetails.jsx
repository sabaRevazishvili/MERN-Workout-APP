import React, { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import { Trash2 } from "lucide-react";
import { DELETE_WORKOUT, EDIT_WORKOUT } from "../context/actions";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext();
  const [edit, setEdit] = useState("");

  const [title, setTitle] = useState(workout.title);
  const [load, setLoad] = useState(workout.load);
  const [reps, setReps] = useState(workout.reps);
  const handleDelete = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: DELETE_WORKOUT, payload: json });
    }
  };
  const handleEdit = async () => {
    if (
      title === workout.title &&
      load == workout.load &&
      reps == workout.reps
    ) {
      setEdit("");
      return;
    }
    const editedWorkout = { title, load, reps };
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedWorkout),
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: EDIT_WORKOUT, payload: json });
      setEdit("");
    }
  };

  const handleCancel = () => {
    setEdit("");
  };
  return edit ? (
    <div className="workout-details">
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <input value={load} onChange={(e) => setLoad(e.target.value)} />
      <input value={reps} onChange={(e) => setReps(e.target.value)} />
      <div className="btn-grp">
        <button onClick={handleEdit} className="edit btn">
          Save
        </button>
        <button onClick={handleCancel} className="cancel btn">
          Cancel
        </button>
      </div>
    </div>
  ) : (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg):</strong> {workout.load}
      </p>
      <p>
        <strong>Reps:</strong> {workout.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span onClick={handleDelete}>
        <Trash2 />
      </span>
      <button
        onClick={() => {
          setEdit(workout._id);
        }}
        className="edit btn"
      >
        Edit
      </button>
    </div>
  );
};

export default WorkoutDetails;

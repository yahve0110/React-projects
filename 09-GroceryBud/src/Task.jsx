import React, { useState } from "react";

const Task = ({ item, removeTask, index }) => {
  const [isCompleted, setisCompleted] = useState(false);

  return (
    <>
      <div className="first">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => setisCompleted(!isCompleted)}
          className="isCompleted"
        />
        {isCompleted ? (
          <span style={{ textDecoration: "line-through" }}>{item}</span>
        ) : (
          <span>{item}</span>
        )}
      </div>
      <button
        className="deleteTask"
        onClick={() => {
          removeTask(index);
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Task;

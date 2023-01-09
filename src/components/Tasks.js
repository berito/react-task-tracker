// we want it to be part of the state of the compoenent
// using hooks
import React from 'react'
import Task from "./Task";
const Tasks = ({tasks,onDelete,onToggle}) => {

  return (
    <>
      {tasks.map((task) => (
       <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
};

export default Tasks;

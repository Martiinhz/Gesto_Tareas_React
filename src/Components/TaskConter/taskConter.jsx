import React, { useState, useEffect } from 'react';

const TaskCounter = ({ tasks }) => {
  const [completedTasks, setCompletedTasks] = useState(0);
  const [pendingTasks, setPendingTasks] = useState(0);

  useEffect(() => {
    let completed = 0;
    let pending = 0;

    tasks.forEach(task => {
      if (task.state) {
        completed++;
      } else {
        pending++;
      }
    });

    setCompletedTasks(completed);
    setPendingTasks(pending);
  }, [tasks]);

  return (
    <div className='recordatorio'>
      <h2>Usted tiene tareas completadas {completedTasks} y tareas pendientes {pendingTasks}</h2>
      <hr />
    </div>
  );
};

export default TaskCounter;

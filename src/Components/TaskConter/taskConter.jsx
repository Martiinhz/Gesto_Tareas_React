import React from 'react';

const TaskCounter = ({ tasks }) => {
  const pendingTasks = tasks.filter(task => !task.state);
  const completedTasks = tasks.filter(task => task.state);

  return (
    <div className='recordatorio'>
      <h2>Usted tiene tareas completadas {completedTasks.length} y tareas pendientes {pendingTasks.length}</h2>
      <hr />
    </div>
  );
};

export default TaskCounter;

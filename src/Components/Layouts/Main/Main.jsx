import React, { useContext, useState } from 'react';
import '../Main/Main.css';
import { Filter } from '../../Filter/Filter';
import { Task } from '../../Tasks/Task';
import { ItemTask } from '../../ItemTask/ItemTask';
import { tasksContext } from '../../Context/Context';
import TaskCounter from '../../TaskConter/taskConter';

export const Main = () => { 
  const context = useContext(tasksContext); 

  const [titleTask, setTitleTask] = useState(''); // Define un estado para el título de la tarea y una función para actualizarlo
  const [descriptionTask, setDescriptionTask] = useState(''); // Define un estado para la descripción de la tarea y una función para actualizarla

  const handleTask = () => { // Define una función para manejar la creación de una nueva tarea
    const newTask = { // Crea un objeto que representa la nueva tarea con el título, la descripción y el estado
      title: titleTask,
      description: descriptionTask,
      state: false,
    };

    context.setTasks([...context.tasks, newTask]); // Actualiza la lista de tareas utilizando el contexto y agregando la nueva tarea al final

    setTitleTask(''); // Restablece el estado del título de la tarea
    setDescriptionTask(''); // Restablece el estado de la descripción de la tarea

    console.log(titleTask); 
  };

  const handleTaskCompletion = (index) => { // Define una función para manejar la marca de una tarea como completada o no completada
    const updatedTasks = [...context.tasks]; // Crea una copia de la lista de tareas actual
    updatedTasks[index].state = !updatedTasks[index].state; // Cambia el estado de la tarea con el índice dado
    context.setTasks(updatedTasks); // Actualiza la lista de tareas utilizando el contexto con las tareas actualizadas
  };

  return (
    <main> 
      <div className='inputs'> 
        <div className='input'> 
          <h5>Titulo tarea:</h5>
          <input onChange={(event) => setTitleTask(event.target.value)} type='text' id='title' value={titleTask} />
        </div>
        <div className='input'> 
          <h5>Descripcion Tarea:</h5>
          <input onChange={(event) => setDescriptionTask(event.target.value)} type='text' id='description' value={descriptionTask} />
        </div>
        <button type='button' onClick={handleTask}> 
          Crear
        </button>
      </div>
      <TaskCounter tasks={context.tasks} />
      <Filter /> 
      <Task>
        {context.tasks.map((task, index) => ( 
          <ItemTask
            key={index} //
            title={task.title} 
            description={task.description}
            marked={task.state} // Pasa el estado de la tarea
            Completion={() => handleTaskCompletion(index)} // llamo a la funcion que da el cambio de la tarea 
          />
        ))}
      </Task>
    </main>
  );
};

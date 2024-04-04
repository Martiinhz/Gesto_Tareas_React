import React, { useContext, useState } from 'react';
import '../Main/Main.css';
import { Filter } from '../../Filter/Filter';
import { Task } from '../../Tasks/Task';
import { ItemTask } from '../../ItemTask/ItemTask';
import { tasksContext } from '../../Context/Context';
import TaskCounter from '../../TaskConter/taskConter';

export const Main = () => { // Define el componente Main y lo exporta
  const context = useContext(tasksContext); // Obtiene el contexto de tareas utilizando el hook useContext

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

    console.log(titleTask); // Imprime el título de la tarea en la consola (aunque debido a la naturaleza asincrónica de setState, puede que no muestre el valor actualizado)
  };

  const handleTaskCompletion = (index) => { // Define una función para manejar la marca de una tarea como completada o no completada
    const updatedTasks = [...context.tasks]; // Crea una copia de la lista de tareas actual
    updatedTasks[index].state = !updatedTasks[index].state; // Cambia el estado de la tarea con el índice dado
    context.setTasks(updatedTasks); // Actualiza la lista de tareas utilizando el contexto con las tareas actualizadas
  };

  return (
    <main> {/* Renderiza el contenido principal del componente */}
      <div className='inputs'> {/* Renderiza un contenedor para los campos de entrada */}
        <div className='input'> {/* Renderiza un campo de entrada para el título de la tarea */}
          <h5>Titulo tarea:</h5>
          <input onChange={(event) => setTitleTask(event.target.value)} type='text' id='title' value={titleTask} />
        </div>
        <div className='input'> {/* Renderiza un campo de entrada para la descripción de la tarea */}
          <h5>Descripcion Tarea:</h5>
          <input onChange={(event) => setDescriptionTask(event.target.value)} type='text' id='description' value={descriptionTask} />
        </div>
        <button type='button' onClick={handleTask}> {/* Renderiza un botón para crear una tarea y llama a la función handleTask cuando se hace clic */}
          Crear
        </button>
      </div>
      <TaskCounter tasks={context.tasks} /> {/* Renderiza un componente TaskCounter y pasa la lista de tareas como prop */}
      <Filter /> {/* Renderiza un componente Filter */}
      <Task> {/* Renderiza un componente Task */}
        {context.tasks.map((task, index) => ( /* Itera sobre la lista de tareas y renderiza un componente ItemTask para cada tarea */
          <ItemTask
            key={index} // Asigna un identificador único a cada tarea
            title={task.title} // Pasa el título de la tarea como prop
            description={task.description} // Pasa la descripción de la tarea como prop
            completed={task.state} // Pasa el estado de completitud de la tarea como prop
            Completion={() => handleTaskCompletion(index)} // Pasa una función para manejar la completitud de la tarea como prop
          />
        ))}
      </Task>
    </main>
  );
};

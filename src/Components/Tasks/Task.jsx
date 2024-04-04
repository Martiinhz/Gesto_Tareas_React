import '../Tasks/Tasks.css'

export const Task = ({ children }) => {
  return (
    <>
      <div className='tareas'>
        <ul>
          <div className='tareas-info'>
            <p>Titulo</p>
            <p>Descripcion</p>
          </div>
          {children}
        </ul>
      </div>

    </>

  )
}

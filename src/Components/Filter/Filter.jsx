import React from 'react'
import '../Filter/Filter.css'

export const Filter = () => {
  return (
    <div className='filter'>
    <h2>Filtrar:</h2>
    <select name="Tareas" id="select">
        <option value="Todas">Todas Las Tareas</option>
        <option value="Pendientes">Pendientes</option>
        <option value="Resueltas">Resueltas</option>
    </select>
    </div>
  )
}

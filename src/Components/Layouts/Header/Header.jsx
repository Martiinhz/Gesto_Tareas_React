import React from 'react'
import logo from '../../../assets/react.jpeg'
import '../Header/Header.css'

export const Header = () => {
  return (
    <header>
        <h1>Gestor De tareas</h1>
        <img src={logo} alt="Logo React" />
    </header>
  )
}

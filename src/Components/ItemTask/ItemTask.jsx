import React from 'react';
import '../ItemTask/ItemTask.css';

export const ItemTask = ({ title, description, completed, Completion }) => {
  return (
    <div className={`item ${completed ? 'completed' : ''}`}>
      <li>
        <b>{title}</b>
        {description} {/* Cambiado de b a span para la descripción */}
      </li>
      <input type="checkbox" checked={completed} onChange={Completion} />
    </div>
  );
};

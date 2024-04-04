import React from 'react';
import '../ItemTask/ItemTask.css';

export const ItemTask = ({ title, description, marked, Completion }) => {
  return (
    <div className={`item ${marked ? 'completed' : ''}`}>
      <li>
        <b>{title}</b>
        {description} 
      </li>
      <input type="checkbox" checked={marked} onChange={Completion} />
    </div>
  );
};

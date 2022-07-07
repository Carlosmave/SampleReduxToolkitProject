import React from 'react'

export const Task = ({ task }) => (
  <aside className="task">
    <h2>Tarea: {task.title}</h2>
    <h3>Estatus: {task.completed ? "Completada" : "Pendiente"}</h3>
  </aside>
)

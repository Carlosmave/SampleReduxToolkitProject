import React from 'react'
import { Link } from 'react-router-dom'

export const User = ({ user, list }) => (
  <article className={list ? 'user-list' : 'user'}>
    <h2>Nombre: {user.name}</h2>
    <h2>Nombre de usuario: {user.username}</h2>
    <h2>Email: {user.email}</h2>
    {list &&
      <Link to={`/users/${user.id}`} className="button">
        Ver usuario
      </Link>
    }
  </article>
)

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchUsers, usersSelector } from '../slices/users'

import { User } from '../components/User'

const Users = () => {
  const dispatch = useDispatch()
  const { users, loading, hasErrors } = useSelector(usersSelector)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const renderUsers = () => {
    if (loading) return <p>Cargando usuarios...</p>
    if (hasErrors) return <p>Hubo un error al cargar los usuarios.</p>

    return users.map(user => <User key={user.id} user={user} list />)
  }

  return (
    <section>
      <h1>Usuarios</h1>
      {renderUsers()}
    </section>
  )
}

export default Users

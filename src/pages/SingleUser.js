import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { fetchUser, userSelector } from '../slices/user'
import { fetchTasks, tasksSelector } from '../slices/tasks'

import { User } from '../components/User'
import { Task } from '../components/Task'

const SingleUser = () => {
  const dispatch = useDispatch()
  const { id } = useParams();
  const { user, loading: userLoading, hasErrors: userHasErrors } = useSelector(
    userSelector
  )
  const {
    tasks,
    loading: tasksLoading,
    hasErrors: tasksHasErrors,
  } = useSelector(tasksSelector)

  useEffect(() => {
    dispatch(fetchTasks(id))
    dispatch(fetchUser(id))
  }, [dispatch, id])

  const renderUser = () => {
    if (userLoading) return <p>Cargando usuario...</p>
    if (userHasErrors) return <p>Hubo un error al cargar el usuario.</p>

    return <User user={user} />
  }

  const renderTasks = () => {
    if (tasksLoading) return <p>Cargando tareas...</p>
    if (tasksHasErrors) return <p>Hubo un error al cargar las tareas.</p>

    return tasks.map(task => (
      <Task key={task.id} task={task} />
    ))
  }

  return (
    <section>
      {renderUser()}
      <h2>Tareas</h2>
      {renderTasks()}
    </section>
  )
}

export default SingleUser

import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  hasErrors: false,
  tasks: [],
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    getTasks: state => {
      state.loading = true
    },
    getTasksSuccess: (state, { payload }) => {
      state.tasks = payload
      state.loading = false
      state.hasErrors = false
    },
    getTasksFailure: state => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

export const {
  getTasks,
  getTasksSuccess,
  getTasksFailure,
} = tasksSlice.actions
export const tasksSelector = state => state.tasks
export default tasksSlice.reducer

export function fetchTasks(userId) {
  return async dispatch => {
    dispatch(getTasks())

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
      )
      const data = await response.json()

      dispatch(getTasksSuccess(data))
    } catch (error) {
      dispatch(getTasksFailure())
    }
  }
}

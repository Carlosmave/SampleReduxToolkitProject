import { combineReducers } from 'redux'

import usersReducer from './users'
import userReducer from './user'
import tasksReducer from './tasks'

const rootReducer = combineReducers({
  users: usersReducer,
  tasks: tasksReducer,
  user: userReducer,
})

export default rootReducer

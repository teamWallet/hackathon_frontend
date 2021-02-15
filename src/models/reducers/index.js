import { combineReducers } from 'redux'
import login from './login'
import publish from './publish'

export default combineReducers({
  login,
  publish
})

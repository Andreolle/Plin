import { combineReducers } from 'redux'
import focus from './focus'
import innerfocus from './innerfocus'

export default combineReducers({
	focus,
	innerfocus
})

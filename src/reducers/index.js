import { combineReducers } from 'redux'
import focus from './focus'
import innerfocus from './innerfocus'
import beforemenu from './beforemenu'
import highlight from './highlight'

export default combineReducers({
	focus,
	innerfocus,
	beforemenu,
	highlight
})

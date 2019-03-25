export default (state = 'highlight', action) => {
	switch (action.type) {
		case 'SET_FOCUS':
			return action.payload
		default:
			return state
	}
}

export default (state = '', action) => {
	switch (action.type) {
		case 'SET_HIGHLIGHT':
			return action.payload
		default:
			return state
	}
}

export default (state = '', action) => {
	switch (action.type) {
		case 'SET__HIGHLIGHT':
			return action.payload
		default:
			return state
	}
}

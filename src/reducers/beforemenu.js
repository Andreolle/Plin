export default (state = 'highlight', action) => {
	switch (action.type) {
		case 'BEFORE_MENU':
			return action.payload
		default:
			return state
	}
}

const defaultValue = {
  focus: 'highlight',
	innerfocus: 0,
	beforemenu: 'highlight',
	items: 0
}

const navigation = (state = defaultValue, action) => {
  switch (action.type) {
  case 'SET_FOCUS':
    return {...state, focus: action.payload}
  case 'SET_INNERFOCUS':
		return {...state, innerfocus: action.payload}
	case 'SET_BEFOREMENU':
    return {...state, beforemenu: action.payload}
	case 'SET_ITEMS':
    return {...state, items: action.payload}
  default:
    return state
  }
}

export default navigation

export function setFocus(action) {
  return { type: 'SET_FOCUS', payload: action }
}

export function setInnerFocus(el) {
	return { type: 'SET_INNERFOCUS', payload: el }
}

export function beforeMenu(el) {
	return { type: 'SET_BEFOREMENU', payload: el }
}

export function setHighlight(el) {
	return { type: 'SET__HIGHLIGHT', payload: el }
}

export function setItems(num) {
	return { type: 'SET_ITEMS', payload: num }
}

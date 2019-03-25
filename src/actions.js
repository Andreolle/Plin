export function setFocus(action) {
  return { type: 'SET_FOCUS', payload: action }
}

export function setInnerFocus(el) {
	return { type: 'SET_INNERFOCUS', payload: el }
}

export function beforeMenu(el) {
	return { type: 'BEFORE_MENU', payload: el }
}

export function setHighlight(el) {
	return { type: 'SET__HIGHLIGHT', payload: el }
}

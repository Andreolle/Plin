export function setFocus(action) {
  return { type: 'SET_FOCUS', payload: action }
}

export function setInnerFocus(el) {
	return { type: 'SET_INNERFOCUS', payload: el }
}

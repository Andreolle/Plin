import {
	setFocus,
	setInnerFocus,
	beforeMenu
} from '../actions'

export function allowedKeys(e) {
	const allowedKeys = {
		13: 'enter',
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down'
	};
	const key = allowedKeys[e.keyCode];
	return key
}

export function navAction(e, props) {
	const {navigation, dispatch} = props;
	const {focus, innerfocus, beforemenu, items} = navigation;
	const allowedKeys = {
		13: 'enter',
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down'
	};
	const key = allowedKeys[e.keyCode];
	let cursor = innerfocus;
	const maxItems = items - 1;

	const onFocus = {
		'highlight': (keyDown) => {
			switch (keyDown) {
				case 'left':
					cursor -= 1
					if (cursor < 0) {
						dispatch(beforeMenu('highlight'))
						dispatch(setFocus('menu'))
					} else {
						dispatch(setInnerFocus(cursor))
					}
				break;
				case 'right':
					cursor += 1
					if (cursor <= maxItems) {
						dispatch(setInnerFocus(cursor))
					}
				break;
				case 'down':
					dispatch(setInnerFocus(0))
					dispatch(setFocus('slider'))
				break;
			}
		}
	}

	if (focus === 'highlight') {
		onFocus.highlight(key)
	}
}

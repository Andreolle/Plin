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

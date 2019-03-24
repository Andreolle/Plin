const request = (url, method) => {
	return fetch(url, {
		method
	})
}

export default request

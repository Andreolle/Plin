import React, { Component } from 'react'

import Menu from '../components/Menu'

class Home extends Component {
	constructor(props) {
    super(props)
	}

	render() {
		return (
			<div className="home">
				<Menu />
			</div>
		)
	}
}

export default Home

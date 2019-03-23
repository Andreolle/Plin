import React, { Component } from 'react'

import Menu from '../components/Menu'
import Highlight from '../components/Highlight'

class Home extends Component {
	render() {
		return (
			<div className="home">
				<Menu />
				<Highlight />
			</div>
		)
	}
}

export default Home

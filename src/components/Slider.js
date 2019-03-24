import React, { Component } from 'react'
import Thumb from '../components/Thumb'

class Slider extends Component {
	render() {
		return (
			<div className="slider">
				<h3 className="slider__header">Agora no BBB</h3>
				<div className="slider__content">
					<div className="slider__content-selected"></div>
					<div className="slider__track">
						<Thumb />
						<Thumb />
						<Thumb />
						<Thumb />
						<Thumb />
						<Thumb />
					</div>
				</div>
			</div>
		)
	}
}

export default Slider

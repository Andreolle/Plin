import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { ReactComponent as Play } from '../assets/images/play-button.svg';

class Slider extends Component {
	render() {
		// const {
		// 	title,
		// 	background,
		// 	logo,
		// 	description,
		// 	buttons,
		// } = this.props;

		return (
			<div className="slider">
				<h1>Slider here</h1>
			</div>
		)
	}
}

// Highlight.propTypes = {
// 	background: PropTypes.string,
// 	title: PropTypes.string,
// 	logo: PropTypes.string,
// 	description: PropTypes.string,
// 	buttons: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			title: PropTypes.string,
// 			type: PropTypes.string,
// 			url: PropTypes.string
// 		}),
// 	)
// }

export default Slider

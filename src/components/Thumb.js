import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { ReactComponent as Play } from '../assets/images/play-button.svg';
import { allowedKeys } from '../utils/handleKeyDown'
import {
	setHighlight
} from '../actions'

class Thumb extends Component {
	highlightItem = (e) => {
		const key = allowedKeys(e);
		const {
			active,
			showname,
			title,
			thumb,
			navigation,
			dispatch
		} = this.props;

		if (key) {
			if (navigation.focus === 'slider' && active) {
				const highlight = {
					title,
					showname,
					thumb
				}
				dispatch(setHighlight(highlight))
			}

			if (navigation.focus !== 'slider') {
				dispatch(setHighlight(''))
			}
		}
	}

	componentDidMount() {
		document.addEventListener("keydown", this.highlightItem);
	}

	render() {
		const {
			active,
			showname,
			title,
			thumb
		} = this.props;

		return (
			<div className={active ? 'thumb thumb--selected': 'thumb'}>
				<figure className="thumb-img">
					<img src={thumb} alt={title} />
					<figcaption className="thumb-img__caption">
						<h4 className="thumb-img__caption-title">{showname}</h4>
						<p className="thumb-img__caption-description">{title}</p>
					</figcaption>
					<div className="thumb-img__overlay"></div>
					<div className="thumb-img__overlay-play">
						<Play />
					</div>
				</figure>
			</div>
		)
	}
}

Thumb.propTypes = {
	active: PropTypes.bool,
	showname: PropTypes.string,
	title: PropTypes.string,
	thumb: PropTypes.string,
}

const mapStateToProps = state => {
  return {
		highlight: state.highlight,
		navigation: state.navigation
  }
}

export default connect(
	mapStateToProps
)(Thumb)

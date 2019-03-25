import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { ReactComponent as Play } from '../assets/images/play-button.svg';

class Thumb extends Component {
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

export default Thumb

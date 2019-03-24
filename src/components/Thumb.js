import React, { Component } from 'react'
import { ReactComponent as Play } from '../assets/images/play-button.svg';

class Thumb extends Component {
	render() {
		return (
			<div className="thumb">
				<figure className="thumb-img">
					<img src="https://live-thumbs.video.globo.com/bbb01/snapshot/" />
					<figcaption className="thumb-img__caption">
						<h4 className="thumb-img__caption-title">Big Brother Brasil</h4>
						<p className="thumb-img__caption-description">Click BBB #1 - 25/03</p>
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

export default Thumb

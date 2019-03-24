import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import { ReactComponent as Play } from '../assets/images/play-button.svg';

class Highlight extends Component {
	render() {
		const {
			title,
			background,
			logo,
			description,
			buttons,
		} = this.props;

		return (
			<section className="highlight">
				<div className="highlight__background">
					<img src={background} />
				</div>
				<div className="highlight__content">
					<h2 className={logo ?
						'highlight__headline highlight__headline--image'
						: 'highlight__headline highlight__headline--text'}>
						{logo ? <img src={logo} alt={title} /> : title}
					</h2>

					<div className="highlight__description">
						<p>{description}</p>
					</div>
					{
						buttons ?
							<div className="highlight__actions">
								{
									buttons.map(button => {
										return (
											<div className="highlight__button" key={button.title}>
												<NavLink to={button.url || "" }>
													{!button.url ? <Play className="icon" /> : null}
													<span>{button.title}</span>
												</NavLink>
											</div>
										)
									})
								}
							</div> : null
					}
				</div>
			</section>
		)
	}
}

Highlight.propTypes = {
	background: PropTypes.string,
	title: PropTypes.string,
	logo: PropTypes.string,
	description: PropTypes.string,
	buttons: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			type: PropTypes.string,
			url: PropTypes.string
		}),
	)
}

export default Highlight

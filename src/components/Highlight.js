import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import { ReactComponent as Play } from '../assets/images/play-button.svg';
import { connect } from 'react-redux'

class Highlight extends Component {
	render() {
		const {
			title,
			background,
			logo,
			description,
			buttons,
			focus,
			innerfocus
		} = this.props;

		return (
			<section className={focus === 'highlight' ? 'highlight highlight--focus': 'highlight'}>
				<div className="highlight__background">
					<img src={background} alt={title} />
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
									buttons.map((button, index) => {
										return (
											<div
												className={
													innerfocus === index
													&& focus === 'highlight' ? "highlight__button highlight__button--hover" : "highlight__button" }
													key={button.title}>

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

const mapStateToProps = state => {
  return {
		focus: state.focus,
		innerfocus: state.innerfocus
  }
}

export default connect(
	mapStateToProps
)(Highlight)

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import { ReactComponent as Play } from '../assets/images/play-button.svg';
import { connect } from 'react-redux'
import { allowedKeys } from '../utils/handleKeyDown'
import {
	setFocus,
	setInnerFocus,
	beforeMenu
} from '../actions'

class Highlight extends Component {
	componentDidMount() {
		document.addEventListener("keydown", this.handleKeyDown);
	}

	handleKeyDown = (e) => {
		const {focus, innerfocus, buttons} = this.props;
		const key = allowedKeys(e);

		if (key) {
			if (focus === 'highlight') {
				const maxItems = buttons.length - 1;
				if (key === 'left') {
					const cursor = innerfocus - 1;
					if (cursor < 0) {
						this.props.dispatch(beforeMenu('highlight'))
						this.props.dispatch(setFocus('menu'))
					} else {
						this.props.dispatch(setInnerFocus(cursor))
					}
				}

				if (key === 'right') {
					const cursor = innerfocus + 1;
					if (cursor <= maxItems) {
						this.props.dispatch(setInnerFocus(cursor))
					}
				}

				if (key === 'down') {
					this.props.dispatch(setInnerFocus(0))
					this.props.dispatch(setFocus('slider'))
				}
			}
		}
	}

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

import React, { Component } from 'react'
import Menu from '../components/Menu'
import Highlight from '../components/Highlight'
import Slider from '../components/Slider'
import { connect } from 'react-redux'
import {
	setFocus,
	setInnerFocus
} from '../actions'

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			beforeMenu: ''
		}
    this.handleKeyDown = this.handleKeyDown.bind(this)
	}

	componentDidMount() {
		document.addEventListener("keydown", this.handleKeyDown);
	}

	handleKeyDown = (e) => {
		const {focus, innerfocus} = this.props;
		const allowedKeys = {
			13: 'enter',
			37: 'left',
			38: 'up',
			39: 'right',
			40: 'down'
		};
		const key = allowedKeys[e.keyCode];

		if (key) {
			if (focus === 'highlight') {
				const maxItems = 1;
				if (key === 'left') {
					const cursor = innerfocus - 1;
					if (cursor < 0) {
						this.setState({
							beforeMenu: 'highlight'
						})
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

			if (focus === 'slider') {
				const maxItems = 9;
				if (key === 'left') {
					const cursor = innerfocus - 1;
					if (cursor < 0) {
						this.setState({
							beforeMenu: 'slider'
						})
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

				if (key === 'up') {
					this.props.dispatch(setInnerFocus(0))
					this.props.dispatch(setFocus('highlight'))
				}
			}

			if (focus === 'menu') {
				const {beforeMenu} = this.state;
				const maxItems = 5;

				if (key === 'down') {
					const cursor = innerfocus + 1;
					if (cursor <= maxItems) {
						this.props.dispatch(setInnerFocus(cursor))
					}
				}

				if (key === 'up') {
					const cursor = innerfocus - 1;
					if (cursor >= 0) {
						this.props.dispatch(setInnerFocus(cursor))
					}
				}

				if (key === 'right') {
					this.props.dispatch(setInnerFocus(0))
					this.props.dispatch(setFocus(beforeMenu))
				}
			}
		}
	}


	render() {
		const defaultHighlight = {
			title: '',
			background: 'https://s2.glbimg.com/hQFshH8y9Q_DekM9PBwTtG-HBYQ=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/Y/c/tabp48RbKCB1x175M65g/destaque-bbb19-centro.jpg',
			logo: 'https://s2.glbimg.com/KB0Dfd_BZhHkfZz91vjR9crp_XQ=/fit-in/1208x364/filters:fill(transparent)/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/a/c/yBO5AWS7W5OXR8PDATbA/urgente-bbb-valendo-logo-destaque.png',
			description: 'Acompanhe 24h ao vivo a casa mais vigiada do Brasil',
			buttons: [{
				title: 'Assista'
			}, {
				title: 'Veja mais',
				url: 'bbb'}
			]
		}

		return (
			<div className="home" onKeyDown={ this.handleKeyDown }>
				<Menu />
				<div className="column">
					<Highlight
						background={defaultHighlight.background}
						logo={defaultHighlight.logo}
						title={defaultHighlight.title}
						description={defaultHighlight.description}
						buttons={defaultHighlight.buttons} />
						<Slider />
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
		focus: state.focus,
		innerfocus: state.innerfocus,
  }
}

export default connect(
	mapStateToProps
)(Home)

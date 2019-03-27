import React, { Component } from 'react'
import Menu from '../components/Menu'
import Highlight from '../components/Highlight'
import Slider from '../components/Slider'
import { connect } from 'react-redux'
import { navAction } from '../utils/handleKeyDown'

class Home extends Component {
	componentDidMount() {
		document.addEventListener("keydown", ((e) => navAction(e, this.props)));
	}
	render() {
		const {
			navigation,
			highlight
		} = this.props

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
			<div className="home">
				<Menu />
				<div className="column">
					{
						navigation.focus === 'slider' && highlight !== '' ?
						(
							<Highlight
								background={highlight.thumb}
								title={highlight.showname}
								description={highlight.title} />
						) : (
							<Highlight
								background={defaultHighlight.background}
								logo={defaultHighlight.logo}
								title={defaultHighlight.title}
								description={defaultHighlight.description}
								buttons={defaultHighlight.buttons} />
						)
					}
						<Slider />
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
		highlight: state.highlight,
		navigation: state.navigation
  }
}

export default connect(
	mapStateToProps
)(Home)

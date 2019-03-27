import React, { Component } from 'react'
import { connect } from 'react-redux'
import Thumb from '../components/Thumb'
import request from '../utils/request'
import { allowedKeys } from '../utils/handleKeyDown'
import {
	setFocus,
	setInnerFocus,
	beforeMenu,
} from '../actions'

class Slider extends Component {
	constructor(props) {
		super(props)

		this.state = {
			maxItems: 0,
			items: []
		};
		this.slide = this.slide.bind(this)
	}

	slide = () => {
		const {navigation} = this.props;
		const selectedItem = navigation.innerfocus;
		const thumbsize = 22.25; // thumb + margin-right
		const calc = thumbsize * selectedItem;
		if (navigation.focus === 'slider') {
			return {
				transform: `translate(-${calc}%, 0px)`
			}
		}
	}

	componentDidMount() {
		request('https://plin-dc1ef.firebaseio.com/playlists.json', 'GET')
			.then(res => res.json().then(data => this.setState({items: data})))
			.catch(error => console.log(error))

		document.addEventListener("keydown", this.handleKeyDown);
	}

	handleKeyDown = (e) => {
		const {navigation, dispatch} = this.props;
		const key = allowedKeys(e);

		if (navigation.focus === 'slider') {
			dispatch(beforeMenu('slider'))
			const videos = this.state.items[0].video;
			const maxItems = videos.length - 1;
			if (key === 'left') {
				const cursor = navigation.innerfocus - 1;
				if (cursor < 0) {
					dispatch(setFocus('menu'))
				} else {
					dispatch(setInnerFocus(cursor))
				}
			}

			if (key === 'right') {
				const cursor = navigation.innerfocus + 1;
				if (cursor <= maxItems) {
					dispatch(setInnerFocus(cursor))
				}
			}

			if (key === 'up') {
				dispatch(setInnerFocus(0))
				dispatch(setFocus('highlight'))
			}
		}
	}

	render() {
		const {
			items,
		} = this.state

		const {
			navigation
		} = this.props

		return (
			<div className={navigation.focus === 'slider' ? 'slider slider--focus' : 'slider'}>
				{items.map(playlist => {
					const title = playlist.title;
					return (
						<span className="slider__wrapper" key={title}>
							<h3 className="slider__header">{title}</h3>
							<div className="slider__content">
								<div className="slider__content-selected"></div>
								<div className="slider__track" style={this.slide()}>
									{playlist.video.map(({title, showname, thumb}, index) =>
										<Thumb
											key={title}
											active={navigation.innerfocus === index && navigation.focus === 'slider'}
											showname={showname}
											thumb={thumb}
											title={title} />)}
								</div>
							</div>
						</span>
					)
				})}
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
		navigation: state.navigation
  }
}

export default connect(
	mapStateToProps
)(Slider)

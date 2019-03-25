import React, { Component } from 'react'
import { connect } from 'react-redux'
import Thumb from '../components/Thumb'
import request from '../utils/request'
import { allowedKeys } from '../utils/handleKeyDown'
import {
	setFocus,
	setInnerFocus,
	beforeMenu
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
		const {innerfocus, focus} = this.props;
		const selectedItem = innerfocus;
		const thumbsize = 22.25; // thumb + margin-right
		const calc = thumbsize * selectedItem;
		if (focus === 'slider') {
			return {
				transform: `translate(-${calc}%, 0px)`
			}
		}
	}

	componentDidMount() {
		const maxItems = document.querySelectorAll('.slider__track .thumb').length;
		request('https://plin-dc1ef.firebaseio.com/playlists.json', 'GET')
			.then(res => res.json().then(data => this.setState({items: data})))
			.catch(error => console.log(error))

		this.setState({
			maxItems
		})

		document.addEventListener("keydown", this.handleKeyDown);
	}

	handleKeyDown = (e) => {
		const {focus, innerfocus} = this.props;
		const key = allowedKeys(e);

		if (focus === 'slider') {
			const maxItems = 9;
			if (key === 'left') {
				const cursor = innerfocus - 1;
				if (cursor < 0) {
					this.props.dispatch(beforeMenu('slider'))
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
	}

	render() {
		const {
			items,
		} = this.state

		const {
			focus,
			innerfocus
		} = this.props

		return (
			<div className={focus === 'slider' ? 'slider slider--focus' : 'slider'}>
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
											active={innerfocus === index && focus === 'slider'}
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
		focus: state.focus,
		innerfocus: state.innerfocus,
		beforemenu: state.beforemenu
  }
}

export default connect(
	mapStateToProps
)(Slider)

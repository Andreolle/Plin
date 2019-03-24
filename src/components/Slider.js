import React, { Component } from 'react'
import Thumb from '../components/Thumb'
import request from '../utils/request'

class Slider extends Component {
	constructor(props) {
		super(props)

		this.state = {
			selectedItem: 0,
			maxItems: 0,
			items: []
		};

		this.sliderNext = this.sliderNext.bind(this)
		this.sliderPrev = this.sliderPrev.bind(this)
		this.slide = this.slide.bind(this)
	}

	sliderNext = () => {
		const maxItems = this.state.maxItems - 1;
		const selectedItem = this.state.selectedItem;

		if (selectedItem < maxItems) {
			this.setState({
				selectedItem: selectedItem + 1
			})
		}
	}

	sliderPrev = () => {
		const selectedItem = this.state.selectedItem;

		if (selectedItem !== 0) {
			this.setState({
				selectedItem: selectedItem - 1
			})
		}
	}

	slide = () => {
		const selectedItem = this.state.selectedItem;
		const thumbsize = 22.25; // thumb + margin-right
		const calc = thumbsize * selectedItem;
		return {
			transform: `translate(-${calc}%, 0px)`
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
	}

	render() {
		const {
			items,
			selectedItem
		} = this.state

		return (
			<div className="slider">
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
											active={selectedItem === index}
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

export default Slider

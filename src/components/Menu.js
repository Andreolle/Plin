import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ReactComponent as Lupe } from '../assets/images/magnifying-glass.svg';
import { ReactComponent as Home } from '../assets/images/house.svg';
import { ReactComponent as Frequency } from '../assets/images/frequency.svg';
import { ReactComponent as Tabs } from '../assets/images/tabs.svg';
import { ReactComponent as Profile } from '../assets/images/profile-user.svg';
import { allowedKeys } from '../utils/handleKeyDown'
import {
	setFocus,
	setInnerFocus
} from '../actions'

class Menu extends Component {
	constructor(props) {
		super(props)
		this.state = {
			menuItems: [
				{
					icon: <Lupe />,
					text: 'Busca'
				},
				{
					icon: <Home />,
					text: 'Início'
				},
				{
					icon: <Frequency />,
					text: 'Assista na Globo'
				},
				{
					icon: <Tabs />,
					text: 'Categorias'
				},
				{
					icon: <Profile />,
					text: 'Minha conta'
				}
			]
		}
	}

	componentDidMount() {
		document.addEventListener("keydown", this.handleKeyDown);
	}

	handleKeyDown = (e) => {
		const {focus, innerfocus, beforemenu} = this.props;
		const {menuItems} = this.state;
		const key = allowedKeys(e);

		if (key) {
			if (focus === 'menu') {
				const maxItems = menuItems.length - 1;

				if (key === 'down') {
					const cursor = innerfocus + 1;
					if (cursor <= maxItems) {
						this.props.dispatch(setInnerFocus(cursor))
					}
				}

				if (key === 'up') {
					console.log('up')
					const cursor = innerfocus - 1;
					if (cursor >= 0) {
						this.props.dispatch(setInnerFocus(cursor))
					}
				}

				if (key === 'right') {
					this.props.dispatch(setFocus(beforemenu))
					this.props.dispatch(setInnerFocus(-1))
				}
			}
		}
	}


	render() {
		const {menuItems} = this.state;
		const {
			focus,
			innerfocus
		} = this.props;

		return (
			<nav className={focus === 'menu' ? 'menu menu--open' : 'menu'}>
				<ul>
					{menuItems.map((item, index) => {
						return (
							<li className="menu__item" key={index}>
								<a href="/" className={
										innerfocus === index
										&& focus === 'menu' ? 'menu__item menu__item--active' : 'menu__item'}>
										{item.icon}
									<span>{item.text}</span>
								</a>
							</li>
						)
					})}
				</ul>
			</nav>
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
)(Menu)

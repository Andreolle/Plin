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
		const {navigation, dispatch} = this.props;
		const {menuItems} = this.state;
		const key = allowedKeys(e);

		if (key) {
			if (navigation.focus === 'menu') {
				const maxItems = menuItems.length - 1;

				if (key === 'down') {
					const cursor = navigation.innerfocus + 1;
					if (cursor <= maxItems) {
						dispatch(setInnerFocus(cursor))
					}
				}

				if (key === 'up') {
					const cursor = navigation.innerfocus - 1;
					if (cursor >= 0) {
						dispatch(setInnerFocus(cursor))
					}
				}

				if (key === 'right') {
					dispatch(setFocus(navigation.beforemenu))
					dispatch(setInnerFocus(-1))
				}
			}
		}
	}


	render() {
		const {menuItems} = this.state;
		const {
			navigation
		} = this.props;

		return (
			<nav className={navigation.focus === 'menu' ? 'menu menu--open' : 'menu'}>
				<ul>
					{menuItems.map((item, index) => {
						return (
							<li className="menu__item" key={index}>
								<a href="/" className={
										navigation.innerfocus === index
										&& navigation.focus === 'menu' ? 'menu__item menu__item--active' : 'menu__item'}>
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
		navigation: state.navigation
  }
}

export default connect(
	mapStateToProps
)(Menu)

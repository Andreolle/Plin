import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ReactComponent as Lupe } from '../assets/images/magnifying-glass.svg';
import { ReactComponent as Home } from '../assets/images/house.svg';
import { ReactComponent as Frequency } from '../assets/images/frequency.svg';
import { ReactComponent as Tabs } from '../assets/images/tabs.svg';
import { ReactComponent as Profile } from '../assets/images/profile-user.svg';

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
							<li className="menu__item">
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
		innerfocus: state.innerfocus
  }
}

export default connect(
	mapStateToProps
)(Menu)

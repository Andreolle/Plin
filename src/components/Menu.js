import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import { ReactComponent as Lupe } from '../assets/images/magnifying-glass.svg';
import { ReactComponent as Home } from '../assets/images/house.svg';
import { ReactComponent as Frequency } from '../assets/images/frequency.svg';
import { ReactComponent as Tabs } from '../assets/images/tabs.svg';
import { ReactComponent as Profile } from '../assets/images/profile-user.svg';

class Menu extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isOpen: false,
		};

		// this.toggleMenu = this.toggleMenu.bind(this)
	}

	render() {
		return (
			<nav className={this.state.isOpen ? 'menu menu--open' : 'menu'}>
				<ul>
					<li>
						<NavLink activeClassName="active" to="/busca">
							<Lupe />
							<span>Busca</span>
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active" to="/">
							<Home />
							<span>Início</span>
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active" to="/assista-na-globo">
							<Frequency />
							<span>Assista na Globo</span>
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active" to="/categorias">
							<Tabs />
							<span>Categorias</span>
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active" to="/minha-conta">
							<Profile />
							<span>Minha conta</span>
						</NavLink>
					</li>
				</ul>
			</nav>
		)
	}
}

export default Menu

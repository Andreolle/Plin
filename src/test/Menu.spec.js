import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import Menu from '../components/Menu'

configure({adapter: new Adapter()})
describe('Menu component', () => {
	it('Menu should initiate closed.', () => {
		const menu = shallow(<Menu />)
		expect(menu.find('.menu').hasClass('menu--open')).toEqual(false)
	})

	it('When Menu state isOpen is true, should have "menu--open" class.', () => {
		const menu = shallow(<Menu />)
		menu.setState({ isOpen: true });
		expect(menu.find('.menu').hasClass('menu--open')).toEqual(true)
	})
})

import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import Menu from '../components/Menu'

configure({adapter: new Adapter()})
describe('Menu component', () => {
	it('Menu should has class "open" when passed prop isOpen equals true.', () => {
		const menu = shallow(<Menu isOpen={true} />)
		expect(menu.find('.menu').hasClass('open')).toEqual(true)
	})

	it('Menu should has class "open" by default.', () => {
		const menu = shallow(<Menu />)
		expect(menu.find('.menu').hasClass('open')).toEqual(true)
	})

	it('Menu should has no class "open" when passed prop isOpen equals false.', () => {
		const menu = shallow(<Menu isOpen={false} />)
		expect(menu.find('.menu').hasClass('open')).toEqual(false)
	})
})

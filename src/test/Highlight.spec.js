import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import Highlight from '../components/Highlight'

configure({adapter: new Adapter()})
describe('Highlight component', () => {
	const highlight =
		shallow(<Highlight
			background="https://test.com/batata.png"
			logo="https://test.com/batata-logo.png"
			title="Lorem"
			description="lorem ipsum"
			buttons={[
				{
					title: 'Assista'
				},
				{
					title: 'Veja mais',
					url: 'batata'
				}
			]}
		/>)
		const highlight2 =
			shallow(<Highlight
				background="https://test.com/batata.png"
				title="My Title"
				description="lorem ipsum"
			/>)

	it('Highlight component should have as background image batata.png.', () => {
		expect(highlight.find('.highlight__background img').prop("src")).toEqual("https://test.com/batata.png")
	})

	it('Highlight component should have some image as title on headline.', () => {
		expect(highlight.find('.highlight__headline').hasClass('highlight__headline--image')).toEqual(true);
		expect(highlight.find('.highlight__headline img').prop("src")).toEqual("https://test.com/batata-logo.png")
	})

	it('Highlight component should have as description "lorem ipsum" text.', () => {
		expect(highlight.find('.highlight__description').text()).toEqual('lorem ipsum')
	})

	it('Highlight component should have 2 buttons with props that has passed.', () => {
		expect(highlight.find('.highlight__actions').children()).toHaveLength(2)
		expect(highlight.find('.highlight__actions span').first().text()).toEqual('Assista')
		expect(highlight.find('.highlight__actions').first().find('.icon').exists()).toEqual(true)
	})

	it('When Highlight component dont receive logo props, should appears text with title props.', () => {
		expect(highlight2.find('.highlight__headline').hasClass('highlight__headline--text')).toEqual(true)
		expect(highlight2.find('.highlight__headline').text()).toEqual('My Title')
	})

	it('When Highlight component dont receive buttons props, highlight__actions should not exist.', () => {
		expect(highlight2.find('.highlight__actions').exists()).toEqual(false)
	})
})

import React, { Component } from 'react'

import Menu from '../components/Menu'
import Highlight from '../components/Highlight'

class Home extends Component {
	// const buttons = {}
	render() {
		return (
			<div className="home">
				<Menu />
				<Highlight
					background="https://s2.glbimg.com/sQgo2XcTf6NUHtQZSJAOMIzUUKI=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/V/z/ghHzyQRlGlQVgUzJPj2w/2019-278-series-warner1-supernatural-destaque-foco-direita.jpg"
					logo="https://s2.glbimg.com/goBXWPCOk072RayqcQRMlax9rpU=/fit-in/0x364/filters:fill(transparent)/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/X/z/ltg5GYTd6jMZod3GeDBA/2019-278-series-warner1-supernatural-logo-destaque.png"
					title="Supernatural"
					description="Atenção forças do Mal: os irmãos Winchester chegaram!"
					buttons={[
						{
							title: 'Assista'
						},
						{
							title: 'Veja mais',
							url: 'batata'
						}
					]} />
			</div>
		)
	}
}

export default Home

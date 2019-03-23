import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import { ReactComponent as Play } from '../assets/images/play-button.svg';

class Highlight extends Component {
	render() {
		return (
			<section className="highlight">
				<div class="highlight__background">
					<img src="https://s2.glbimg.com/sQgo2XcTf6NUHtQZSJAOMIzUUKI=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/V/z/ghHzyQRlGlQVgUzJPj2w/2019-278-series-warner1-supernatural-destaque-foco-direita.jpg" alt=""/>
				</div>
				<div className="highlight__content">
					<h2 className="highlight__headline highlight__headline highlight__headline--image">
						<img src="https://s2.glbimg.com/goBXWPCOk072RayqcQRMlax9rpU=/fit-in/0x364/filters:fill(transparent)/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/X/z/ltg5GYTd6jMZod3GeDBA/2019-278-series-warner1-supernatural-logo-destaque.png" alt=""/>
					</h2>
					<div class="highlight__description">
						<p>Atenção forças do Mal: os irmãos Winchester chegaram!</p>
					</div>
					<div className="highlight__actions">
					<div className="highlight__button">
							<NavLink to="/minha-conta">
								<Play />
								<span>Assista</span>
							</NavLink>
						</div>
						<div className="highlight__button">
							<NavLink to="/minha-conta">
								<span>Veja mais</span>
							</NavLink>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

Highlight.propTypes = {
	isOpen: PropTypes.bool
}

Highlight.defaultProps = {
  isOpen: true
};

export default Highlight

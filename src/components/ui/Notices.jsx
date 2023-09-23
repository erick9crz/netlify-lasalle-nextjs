'use client'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Link from 'next/link';
import CustomImage from './CustomImage';

export default function Notices() {
	// Array para cargar la info de cada slider
	const sliders = [
		{id: '1', link: {isAtive: 'false', url: '#!'}},
		{id: '2', link: {isAtive: 'false', url: '#!'}},
		{id: '3', link: {isAtive: 'true', url: '#!'}}
	];

	// Ajustes para el carousel
	const settings = {
		arrows: false,
		autoplay: true,
		lazyLoad: 'nearby',
		pagination: false,
		preloadPages: 1,
		type: 'loop',
		speed: 900,
	};

	return (
		<div className="c-notices">
			<div className="o-container">
				<h2 className="o-subtitle">Avisos</h2>
			</div>

			<div className="c-notices__slider">
				<div className="o-container">
					<div className="c-notices__cards">
						<Splide options={settings}>
							{sliders.map((item, index) => (
								<SplideSlide key={index} className="c-notices__cards-item">
									<div className="c-notices__card">
										{/* Forma de hacer el (-if(slider2[i].link.isAtive === 'true')) */}
										{item.link.isAtive === 'true' ? (
											<Link href={item.link.url} title="Aviso">
												<CustomImage src={`/images/home/La-Salle-Home-Aviso-0${item.id}.jpg`} width="560" height="340" alt="Avisos"/>
											</Link>
										) : (
											<CustomImage src={`/images/home/La-Salle-Home-Aviso-0${item.id}.jpg`} width="560" height="340" alt="Avisos"/>
										)}
									</div>
								</SplideSlide>
							))}
						</Splide>
					</div>
				</div>
			</div>
		</div>
	)
}

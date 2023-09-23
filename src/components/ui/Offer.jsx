'use client'
import CustomImage from "./CustomImage";
import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { useEffect } from "react";

export default function Offer() {

	const slider = [
		{id: '1', img: 'Licenciatura', title: 'Licenciatura', link: '#!'},
		{id: '2', img: 'Diplomados', title: 'Diplomados', link: '#!'},
		{id: '3', img: 'Maestria', title: 'Maestria', link: '#!'},
		{id: '4', img: 'Posgrados', title: 'Posgrados', link: '#!'}
	]

	const settingsImg = {
		arrows: false,
		pagination: false,
		type: 'loop',
		speed: 900,
	}

	const settingsTxt = {
		arrows: false,
		pagination: true,
		type: 'loop',
		speed: 900,
	}

	// Agregar el evento de redimensionamiento cuando el componente se monta
	useEffect(() => {
		console.log('demooooo');
		// const settingsImg = {
		// 	arrows: false,
		// 	pagination: false,
		// 	type: 'loop',
		// 	speed: 900,
		// }

		// const settingsTxt = {
		// 	arrows: false,
		// 	pagination: true,
		// 	type: 'loop',
		// 	speed: 900,
		// }

		// const sliderImg = new Splide( '#js-slider-img', settingsImg);
		// const sliderTxt = new Splide( '#js-slider-txt', settingsTxt);

		// sliderImg.sync( sliderTxt );
		// sliderImg.mount();
		// sliderTxt.mount();

		// const splide = new Splide( '.js-slider-img' );

		// splide.on( 'mounted', function () {
		// 	// This will be executed.
		// } );
	}, []);

	return (
		<div className="c-offer">
			<div className="o-container">
				<h2 className="o-subtitle">Oferta Educativa</h2>
			</div>

			<div className="c-offer__slider">
				<div className="o-container">
					<div className="c-offer__img">
						<Splide id="js-slider-img" className="js-slider-img" options={settingsImg}>
							{slider.map((item, index) => (
								<SplideSlide key={index} className="c-offer__img-item" data-id={item.id}>
									<CustomImage src={`/images/nosotros/La-Salle-Oferta-Educativa-${item.img}.jpg`} width="1200" height="640" alt={item.title}/>
								</SplideSlide>
							))}
						</Splide>
					</div>

					<div className="c-offer__titles">
						<Splide id="js-slider-txt" className="js-slider-txt" options={settingsTxt}>
							{slider.map((item, index) => (
								<SplideSlide key={index} className="c-offer__titles-item" data-id={item.id}>
									<div className="c-offer__titles-data">
										<h3>{item.title}</h3>
										<Link className="o-btn o-btn--whiteBlue" href={item.link} title="Conoce más">Conoce más</Link>
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

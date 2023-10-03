'use client'
import CustomImage from "./CustomImage";
import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import Splide from '@splidejs/splide';
import '@splidejs/react-splide/css';
import { useRef, useState } from "react";

export default function Offer() {

	const slider = [
		{id: '1', img: 'Licenciatura', title: 'Licenciatura', link: '#!'},
		{id: '2', img: 'Diplomados', title: 'Diplomados', link: '#!'},
		{id: '3', img: 'Maestria', title: 'Maestria', link: '#!'},
		{id: '4', img: 'Posgrados', title: 'Posgrados', link: '#!'}
	]

	const settingsImg = {
		autoplay: true,
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

	// ******** Forma de sincronizar dos carruseles con la biblioteca principal de Splid ********
	// Utilizar el hook "useState" para crear la variable de "currentIndex" e inicializarla en 0
	// el cual utilizara para realizar un seguimiento del índice actual del carrusel.
	const [currentIndex, setCurrentIndex] = useState(0);

	// Creamos dos variables para hacer referencia a los carruseles y asi poder acceder al objeto
	// Splide asociado a cada carrusel y realizar operaciones en él, como moverlo a un índice específico.
	const sliderImages = useRef(null);
	const sliderTextos = useRef(null);

	// Funciones para manejadores de eventos que se ejecutan cuando los carruseles primario y secundario se mueven,
	// respectivamente. Cada función toma un argumento splide, que representa el objeto Splide del carrusel que se ha movido.
	const handlePrimaryMove = (splide) => {
		// Actualizamos el estado de "currentIndex" con el índice del carrusel que se ha movido. Esto es útil 
		// para realizar un seguimiento del índice actual y sincronizar ambos carruseles.
		setCurrentIndex(splide.index);
		
		// Mueve el otro carrusel al mismo índice
		sliderTextos.current.go(splide.index);
	}
	
	const handleSecondaryMove = (splide) => {
		setCurrentIndex(splide.index);
		// Mueve el otro carrusel al mismo índice
		sliderImages.current.go(splide.index);
	}

	// ******** Forma de sincronizar dos carruseles con la biblioteca principal de Splid ********
	// 	const settingsImg = {
	// 		type: 'loop',
	// 		perPage: 3,
	// 		autoplay: true,
	// 		interval: 2000,
	// 	};

	// 	const settingsTxt = {
	// 		type: 'loop',
	// 		perPage: 3,
	// 		autoplay: true,
	// 		interval: 2000,
	// 	};

	// 	const sliderImg = new Splide( '#js-slider-img', settingsImg);
	// 	const sliderTxt = new Splide( '#js-slider-txt', settingsTxt);

	// 	sliderImg.sync( sliderTxt );
	// 	sliderImg.mount();
	// 	sliderTxt.mount();
	// ********************************

	return (
		<div className="c-offer">
			<div className="o-container">
				<h2 className="o-subtitle">Oferta Educativa</h2>
			</div>

			<div className="c-offer__slider">
				<div className="o-container">
					<div className="c-offer__img">
						<Splide id="js-slider-img" className="js-slider-img" options={settingsImg} onMove={handlePrimaryMove} ref={sliderImages}>
							{slider.map((item, index) => (
								<SplideSlide key={index} className="c-offer__img-item" data-id={item.id}>
									<CustomImage src={`/images/nosotros/La-Salle-Oferta-Educativa-${item.img}.jpg`} width="1200" height="640" alt={item.title}/>
								</SplideSlide>
							))}
						</Splide>
					</div>

					<div className="c-offer__titles">
						<Splide id="js-slider-txt" className="js-slider-txt" options={settingsTxt} onMove={handleSecondaryMove} ref={sliderTextos}>
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

			{/* Estructura paras de sincronizar dos carruseles con la biblioteca principal de Splid */}
			{/* <div className="splide" id="js-slider-img">
				<div className="splide__track">
					<div className="splide__list">
						<div className="splide__slide">Slide 1</div>
						<div className="splide__slide">Slide 2</div>
						<div className="splide__slide">Slide 3</div>
						<div className="splide__slide">Slide 4</div>
						<div className="splide__slide">Slide 5</div>
					</div>
				</div>
			</div> */}

			{/* <div className="splide" id="js-slider-txt">
				<div className="splide__track">
					<div className="splide__list">
						<div className="splide__slide">Slide 1</div>
						<div className="splide__slide">Slide 2</div>
						<div className="splide__slide">Slide 3</div>
						<div className="splide__slide">Slide 4</div>
						<div className="splide__slide">Slide 5</div>
					</div>
				</div>
			</div> */}
		</div>
	)
}

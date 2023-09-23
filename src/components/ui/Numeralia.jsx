'use client'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Icons } from "./Icons";

export default function Numeralia() {
	const itemsSlider= [
		{num: '10', symbol: 'K', icon: 'student', text: 'Estudiantes en todos los campus La Salle'},
		{num: '15', symbol: 'M', icon: 'hands', text: 'Clases impartidas por los mejores profesionales'},
		{num: '400', symbol: '', icon: 'certificate', text: 'Reconocimientos y Premios en el gremio'},
		{num: '10', symbol: '+', icon: 'feather', text: 'Menciones en revistas nacionales'}
	]

	// Ajustes para el carousel
	const settings = {
		arrows: false,
		autoplay: false,
		classes: {
			arrow : 'c-numeralia__slider-arrow',
			prev  : 'icon icon-arrowprev c-numeralia__slider-arrow-prev',
			next  : 'icon c-numeralia__slider-arrow-next',
		},
		pagination: false,
		perPage: 4,
		speed: 900,
		type: 'slide',
		breakpoints: {
			567: {
				perPage: 1,
			},
			959: {
				arrows: true,
				perPage: 3,
				type: 'loop',
			},
		},
	}

	return (
		<div className="c-numeralia">
			<div className="o-container">
				<h2 className="o-subtitle">Hablando en números</h2>

				<Splide className="c-numeralia__slider" options={settings}>
					{itemsSlider.map((item, index) => (
						<SplideSlide key={index} className="c-numeralia__slider-item">
							<div className="c-numeralia__card">
								<div className="c-numeralia__card-icon"><Icons name={item.icon}/></div>
								<strong><span className="c-numeralia__card-num js-animateNum" data-num={item.num}>0{item.symbol}</span></strong>
								<p>{item.text}</p>
							</div>
						</SplideSlide>
					))}
				</Splide>
				<span className="c-numeralia__bg"></span>
			</div>
		</div>
	)
}

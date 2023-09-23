'use client'
import CustomImage from "./CustomImage";
import { Icons } from "./Icons";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";

export default function Interest() {
	const items = [];

	for (let i = 0; i < 10; i++) {
		items.push(
			<li key={i}>
				<a href="#!" title={`Link externo ${i}`}>Link externo {i} <Icons name='arrow'/></a>
			</li>
		);
	}

	const slider = [
		{id: '1', title: 'Yammer', link: '#!'},
		{id: '2', title: 'Indivisa Font', link: '#!'},
		{id: '3', title: 'Correo institucional', link: '#!'},
		{id: '4', title: 'Pagos en línea', link: '#!'}
	]

	const settings= {
		arrows: false,
		autoplay: true,
		autoWidth: true,
		pagination: false,
		preloadPages: 3,
		perPage: 1,
		type: 'loop',
		speed: 900,
		breakpoints: {
			567: {
				preloadPages: 1,
			},
			959: {
				preloadPages: 2,
			},
		},
	}

	return (
		<div className="c-interest">
			<div className="o-container"><h2 className="o-subtitle">Sitios de interés</h2></div>

			<div className="c-interest__img">
				<CustomImage src="/images/home/La-Salle-Home-Sitio-Interes.jpg" width="1200" height="800" alt="Facultad"/>
			</div>

			<div className="o-container">
				<div className="js-interestList">
					<ul className="c-interest__list">
						{items}
					</ul>
					<p className="c-interest__more"><a className="js-btnMoreLinks" href="#!" title="Mostrar más sitios" data-more="Mostrar más sitios" data-less="Mostrar menos sitios">Mostrar más sitios</a></p>
				</div>
			</div>

			<div className="c-interest__otherLinks">
				<div className="o-container">
					<Splide className="c-interest__slider" options={settings}>
						{slider.map((item, index) => (
							<SplideSlide key={index} className="c-interest__slider-item">
								<div className="c-interest__card">
									<div className="c-interest__card-img">
										<Link href={item.link} title={item.title}><CustomImage src={`/images/home/La-Salle-Home-Accesos-Directos-0${item.id}.jpg`} width="560" height="340" alt={item.title}/></Link>
									</div>
									<p><Link href={item.link} title={item.title}>{item.title}<Icons name='arrow'/></Link></p>
								</div>
							</SplideSlide>
						))}
					</Splide>
				</div>
			</div>
		</div>
	)
}


'use client'
import Link from 'next/link';
import CustomImage from './CustomImage';
import { Icons } from './Icons';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function NewsBanner() {
	// Array de objetos para el carousel de noticias - Banner
	const newsCards = [
		{ id: '1', link: '#!', date: '9 Octubre, 2020', title: 'Bienvenida Docente 2020','subTitle': 'Facultad de Negocios'},
		{ id: '2', link: '#!', date: '9 Octubre, 2020', title: 'Mensaje de bienvenida a alumnos de Posgrado Hno. Roberto Luna Anaya','subTitle': 'Facultad de Negocios'},
		{ id: '3', link: '#!', date: '9 Octubre, 2020', title: 'Mensaje de bienvenida a alumnos de Posgradol','subTitle': 'Facultad de Negocios'},
		{ id: '2', link: '#!', date: '9 Octubre, 2020', title: 'Mensaje de bienvenida a alumnos de Posgrado Hno. Roberto Luna Anaya','subTitle': 'Facultad de Negocios'},
	];

	// Configuracion del slider de noticias - Banner
	const settings = {
		// autoWidth: true,
		arrows: false,
		// lazyLoad: 'nearby',
		pagination: false,
		perPage: 3,
		preloadPages: 1,
		type: 'slide',
		breakpoints: {
			959: {
				autoplay: false,
				perPage: 1,
				type: 'loop'
			}
		}
	};

	return (
		<div className="c-news-banner">
			<div className="c-news-banner__main">
				<Link href="#!" title="Summer school"><CustomImage src="/images/home/La-Salle-Home-Noticias-Portada.jpg" width="1920" height="610" alt="Noticias"/></Link>
				<div className="o-container">
					<h3>
						<Link href="#!" title="Summer school">Summer School</Link>
					</h3>
					<div className="c-news-banner__date">
						<p>Facultad de Negocios</p>
						<p>9 Octubre, 2020</p>
					</div>
				</div>
			</div>

			<div className="c-news-banner__more-news">
				<div className="o-container">
					<h2><Link href="#!" title="Más noticias">Más Noticias <Icons name="arrow"></Icons></Link></h2>

					<div className="c-news-banner__list">
						<Splide options={settings}>
							{newsCards.map((item, index) => (
								<SplideSlide key={index} className="c-news-banner__list-slide">
									<div className="c-news-banner__card">
										<div className="c-news-banner__card-img">
											<Link href="#!" title={item.title}>
												<CustomImage src={`/images/home/La-Salle-Home-Noticias-0${item.id}.jpg`} width="560" height="360" alt={item.title}/>
											</Link>
										</div>
										<div className="c-news-banner__card-info">
											<h3>
												<Link href="#!" title={item.title}>{item.title}</Link>
											</h3>
											<div className="c-news-banner__card-date">
												<p>{item.subTitle}</p>
												<p>{item.date}</p>
											</div>
										</div>
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

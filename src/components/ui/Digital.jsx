'use client'
import Link from "next/link";
import CustomImage from "./CustomImage";
import { Icons } from "./Icons";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function Digital() {
	// Array para cargar las noticias mas recientes
	const items = [
		{id: '1', title: 'Lasallista, realiza así tu preinscripción de Área Curricular Común', date: '22 Octubre, 2020', heart: '0', comments: '0', link: '#!'},
		{id: '2', title: 'Conoce la convocatoria y postúlate para formar parte del nuevo Consejo Universitario Estudiantil', date: '22 Octubre, 2020', heart: '0', comments: '0', link: '#!'},
		{id: '3', title: 'Mientras más innovación, más permaneces en el mercado: experto de negocios de Huawei', date: '22 Octubre, 2020', heart: '0', comments: '0', link: '#!'},
	]

	// Array para cargar la info de cada slider
	const itemSlider = [
		{id: '1', link: '#!', linkLive: '#!', classCard: 'alive'},
		{id: '2', link: '#!', linkLive: '#!', classCard: 'alive'},
		{id: '3', link: '#!', linkLive: '#!', classCard: ''},
		{id: '4', link: '#!', linkLive: '#!', classCard: 'left'}
	]

	// Condicional
	// const cardClass = itemSlider.map(item => item.classCard !== '' ? `c-digital__alive-card--${item.classCard}` : '');

	// Ajustes para el carousel
	const settings = {
		arrows: false,
		autoplay: true,
		autoWidth: true,
		pagination: false,
		preloadPages: 2,
		type: 'loop',
		speed: 900,
	}

	return (
		<div className="c-digital">
			<div className="o-container">
				<h2 className="o-subtitle">La Salle digital</h2>

				<div className="c-digital__networks">
					<div className="c-digital__networks-col">
						<h3><span>Síguenos</span></h3>

						<div className="c-digital__networks-feed">
							<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLaSalleMX&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=543134039108254"></iframe>
						</div>
					</div>

					<div className="c-digital__networks-col">
						<h3><span>Lo más reciente</span></h3>

						<ul className="c-recentnews">
							{items.map((item, index) => (
								<li key={index}>
									<div className="c-recentnews__card">
										<div className="c-recentnews__card-img">
											<Link href={item.link} title={item.title}>
												<CustomImage src={`/images/home/La-Salle-Home-Digital-Reciente-0${item.id}.jpg`} width="560" height="340" alt="Links"/>
											</Link>
										</div>

										<div className="c-recentnews__card-info">
											<p>{item.date}</p>
											<h4>
												<Link href={item.link} title={item.title}>{item.title}</Link>
											</h4>
											<ul>
												<li>
													<Icons name='heart'/>
													{item.heart}
												</li>
												<li>
													<Icons name='comments'/>
													{item.comments}
												</li>
											</ul>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>

			<div className="c-digital__full">
				<div className="o-container">
					<h3><span>La Salle en vivo</span></h3>
				</div>

				<div className="c-digital__slider">
					<div className="o-container">
						<Splide className="c-digital__alive" options={settings}>
							{itemSlider.map((item, index) => (
								<SplideSlide key={index} className="c-digital__alive-item">
									<div className={`c-digital__alive-card ${item.classCard !== '' ? `c-digital__alive-card--${item.classCard}` : ''}`}>
										<Link href={item.link} title="3er International Business Week">
											<CustomImage src={`/images/home/La-Salle-Home-Digital-EnVivo-0${item.id}.jpg`} width="580" height="740" alt="Links"/>
										</Link>

										<div className="c-digital__alive-live">
											<Link href={item.linkLive} title="3er International Business Week">
												<Icons name='isotipo'/>
												<div className="c-digital__alive-img">
													<CustomImage src="/images/global/La-Salle-En-Vivo-Azul.png" width="300" height="100" alt="Links"/>
												</div>
											</Link>
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

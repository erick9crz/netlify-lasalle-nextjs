'use client'
import Link from "next/link";
import CustomImage from "./CustomImage";
import { Icons } from "./Icons";

export default function About() {

	// Abre la modal
	const openModal = (event) => {
		event.preventDefault();

		const $box = document.querySelector('.js-modalViewer'),
			$videoBox = $box.querySelector('.js-videoViewer');
		
		let that = event.currentTarget,
			urlVideo = that.getAttribute('data-video');

		$videoBox.querySelector('iframe').setAttribute('src', urlVideo);

		$box.style.display = 'flex';
		animateFadeIn($box);

	}

	const closeModal = (event) => {
		event.preventDefault();

		const $box = document.querySelector('.js-modalViewer'),
			$videoBox = $box.querySelectorAll('.js-videoViewer');

		$videoBox.forEach(video => {
			video.querySelector('iframe').setAttribute('src', 'about:blank');
		});
		animateFadeOut($box);
	}

	// Muestra gradualmente un elemento como si utilizara (fadeIn() de jquery)
	const animateFadeIn = (element) => {
		let opacity = 0;
		const interval = 10, // intervalo de tiempo en milisegundos
			duration = 1000, // duración de la animación en milisegundos
			steps = duration / interval,
			deltaOpacity = 1 / steps;

		const fadeInInterval = setInterval(function() {
			opacity += deltaOpacity;
			element.style.opacity = opacity;
			
			if (opacity >= 1) {
				clearInterval(fadeInInterval);
			}
		}, interval);
	}

	// Oculta gradualmente un elemento como si utilizara (fadeOut() de jquery)
	const animateFadeOut = (element) => {
		let opacity = 1;

		const interval = 10,
			duration = 1000,
			steps = duration / interval,
			deltaOpacity = 1 / steps;

		const fadeOutInterval = setInterval(function() {
			opacity -= deltaOpacity;
			element.style.opacity = opacity;
			if (opacity <= 0) {
				clearInterval(fadeOutInterval);
				element.style.display = "none";
			}
		}, interval);
	}

	return (
		<div className="c-about">
			<div className="c-about__img">
				<CustomImage src='/images/home/La-Salle-Home-Sobre-Facultad.jpg' width='1920' height='1080' alt='Logotipo'/>
			</div>

			<div className="o-container">
				<div className="c-about__info">
					<h2>Sobre la Facultad</h2>

					<div className="c-about__info-intro">
						<p>La Facultad de Negocios cuenta con la misma edad que la universidad, por lo que es un área fundadora y la más antigua de La Salle. El Dr. Manuel de Jesús Álvarez fungió como Rector y primer Director de la Facultad de Negocios de 1961 a 1963.</p>
						<Link className="o-btn o-btn--whiteBlue" href="#!" title="Conoce más">Conoce más</Link>
					</div>
				</div>
				
				<div className="c-about__links">
					<ul>
						<li>
							<div className="c-about__links-img">
								<Link href="#!" title="Eventos">
									<CustomImage src='/images/home/La-Salle-Home-Sobre-Facultad-Eventos.jpg' width='560' height='340' alt='Eventos'/>
									<small>Eventos <Icons name='arrow'></Icons></small>
								</Link>
							</div>
						</li>
						<li>
							<div className="c-about__links-img c-about__links-img--video">
								<a className="js-openModalVideo" href="#!" title="Eventos" data-video="https://www.youtube.com/embed/HJDBQehcGdU?autoplay=1" onClick={openModal}>
									<CustomImage src='/images/home/La-Salle-Home-Sobre-Facultad-Video.jpg' width='560' height='340' alt='Eventos'/>
									<small><Icons name='play'></Icons></small>
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>

			<div className="c-modal c-modal--blue js-modalViewer">
				<div className="o-container">
					<a className="c-modal__close" href="#!" title="Cerrar PDF" onClick={closeModal}><Icons name='close'></Icons></a>
					<div className="c-modal__video js-videoViewer" data-demo='1'>
						<iframe src="about:blank"></iframe>
					</div>
				</div>
			</div>
		</div>
	)
}

'use client'
import Link from "next/link";
import { Icons } from "./Icons";
import { useEffect } from "react";

export default function Events() {
	const events = [
		{day: '05', month: 'Julio', link: '#!', schedule: '9:00 am a 18:00', address: 'Benjamín Hill 75, Col. Condesa', phone: '5759500587', title: 'Periodo para Solicitar Becas de Licenciaturas'},
		{day: '12', month: 'Julio', link: '#!', schedule: '9:00 am a 18:00', address: 'Benjamín Hill 75, Col. Condesa', phone: '5759500587', title: 'Periodo para Solicitar Becas de Licenciaturas'},
		{day: '23', month: 'Julio', link: '#!', schedule: '9:00 am a 18:00', address: 'Benjamín Hill 75, Col. Condesa', phone: '5759500587', title: 'Periodo para Solicitar Becas de Licenciaturas'},
	];

	const showMoreDetail = (event) => {
		event.preventDefault();

		let that = event.target.parentNode,
			$current = that.closest('.js-calCard'),
			$boxResume = $current.querySelector('.js-cardResume').scrollHeight;
		
		if (!that.classList.contains('is-open')) {
			that.classList.add('is-open');
			$current.querySelector('.js-cardResume').style.height = $boxResume + 'px';
		} else {
			that.classList.remove('is-open');
			$current.querySelector('.js-cardResume').style.height = '0px';
		}
	}

	const resetCardsCal = () => {
		let $cardResume = document.querySelectorAll('.js-cardResume'),
			$btnDetail = document.querySelectorAll('.js-moreDetail');

		if (screen.width >= 568) {
			$cardResume.forEach(resume => {
				resume.style.removeProperty('height');
			});

			$btnDetail.forEach(btn => {
				btn.classList.remove('is-open');
			});
		}
	}

	// Agregar el evento de redimensionamiento cuando el componente se monta
	useEffect(() => {
		window.addEventListener('resize', resetCardsCal);
	
		// Remover el evento cuando el componente se desmonta
		return () => {
			window.removeEventListener('resize', resetCardsCal);
		};
	}, []);

	return (
		<div className="c-events">
			<div className="o-container">
				<h2 className="o-subtitle">Calendarios</h2>

				<ul className="c-events__list">
					{events.map((item, index) => (
						<li key={index}>
							<div className="c-events__card js-calCard">
								<div className="c-events__card-date">
									<strong>{item.day}</strong>
									<small>{item.month}</small>
								</div>
								<div className="c-events__card-info">
									<div className="c-events__card-title">
										<h3>
											<Link href={item.link} title="Calendario">{item.title}</Link>
										</h3>
										<a className="c-events__card-btn js-moreDetail" href="#!" title="Calendario" onClick={showMoreDetail}><Icons name="close"/></a>
									</div>
									<div className="c-events__card-resume js-cardResume">
										<p>{item.schedule}</p>
										<p>{item.address}</p>
										<p><Link href={`tel:${item.phone}`} title={`Llamar a ${item.phone}`}>{item.phone}</Link></p>
										<Link className="c-events__card-link" href="#!" title="Calendario"><Icons name="arrow"></Icons></Link>
									</div>
								</div>
							</div>
						</li>
					))}
					
				</ul>
				<p className="u-text-center"><Link className="o-btn" href="#!" title="Ir a calendario">Ir a calendario</Link></p>
			</div>
		</div>
	)
}

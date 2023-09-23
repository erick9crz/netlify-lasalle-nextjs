'use client'
import Link from 'next/link';
import { Icons } from '@/components/ui/Icons';
import CustomImage from '@/components/ui/CustomImage';
import { useState } from 'react';
// import Image from 'next/image';
// import logo from 'public/images/global/lasalle-logo.svg';
// import menuInstal from 'public/images/menu/La-Salle-Menu-instalaciones.png';
// import menuAlian from 'public/images/menu/La-Salle-Menu-Acreditaciones-Alianzas.png';
// import menuDocen from 'public/images/menu/La-Salle-Menu-Claustro-Docente.png';
// import menuRepo from 'public/images/menu/La-Salle-Menu-Repositorio.png';
// import menuRevis from 'public/images/menu/La-Salle-Menu-Revistas.png';
// import menuVideo from 'public/images/menu/La-Salle-Menu-Video-Blog.png';

export default function Header() {
	// let urlFolder = '';

	// if (typeof window !== 'undefined') {
	// 	const indice = window.location.href;

	// 	if (indice !== 'index.html') {
	// 		urlFolder = './';
	// 	}
	// }

	// Abre/cierra el menu en mobile
	const openMenu = (event) => {
		event.preventDefault();
		document.body.classList.toggle('is-openMenu');
	}

	// Abre/Cierra los submenus del menu en mobile
	const openSubMenu = (event) => {
		event.preventDefault();

		let that = event.target,
			anchoVentana = window.innerWidth,
			$subMenu = that.parentNode.querySelector('.js-subMenu'),
			menuHeight = $subMenu.scrollHeight + 36;

		if (anchoVentana >= 681) {
			return false;
		}

		if (!that.classList.contains('is-active')) {
			let allSubmenus = that.parentNode.parentNode;

			allSubmenus.querySelectorAll('.js-openSub').forEach(anchor => {
				anchor.classList.remove('is-active');
			});
			
			allSubmenus.querySelectorAll('.js-subMenu').forEach(sub => {
				sub.classList.remove('is-active');
				sub.style.height = '0px';
			});

			that.classList.add('is-active');
			$subMenu.classList.add('is-active');
			$subMenu.style.height = menuHeight + 'px';
		} else {
			that.classList.remove('is-active');
			$subMenu.style.height = '0px';
			$subMenu.classList.remove('is-active');
		}
	}

	// Abre el buscador
	const openSearch = (event) => {
		event.preventDefault();
		
		const $mainContainer = document.querySelector('.c-page'),
			$searchContainer = document.querySelector('.js-search'),
			$inputSearch = document.querySelector('.js-search-input input');

		$mainContainer.classList.add('m-mainWrapHide');
		$searchContainer.classList.add('is-open');
		setTimeout(function () {
			$inputSearch.focus();
		},500);
	}

	return (
		<header className='c-header'>
			<div className='c-header__top'>
				<div className='o-container'>
					<div className='c-header__logo'>
						{/* <Image src={logo} alt='logotipo'/> */}
						{/* <Image src='https://fakeimg.pl/640x360' width='640' height='360' alt='vamos'/> */}
						{/* <Link href='/' title='Home'> Inicio <Icons name='directorio'></Icons> </Link> */}
						{/* <Link href='/' title='Inicio'> <Image src={logo} alt='La Salle - Logotipo'/> </Link> */}
						<Link href='/' title='Inicio'> <CustomImage src='/images/global/lasalle-logo.svg' width='300' height='99' alt='Logotipo'/> </Link>
					</div>

					<div className='c-header__tools'>
						<ul className='c-header__lang'>
							<li><Link className='is-active' href='Es' title='Versión español'>Es</Link></li>
							<li><Link href='In' title='English version'>In</Link></li>
						</ul>

						<div className="c-header__search">
							<a id='btnOpenSearch' href='#!' title='Buscador' onClick={openSearch}><Icons name='seeker'></Icons></a>
						</div>
					</div>
				</div>
			</div>

			<div className='c-header__bottom'>
				<div className='o-container'>
					<div className='c-header__logo-micro'>
						<h2>Facultad de <strong>Negocios</strong></h2>
					</div>

					<div className='c-header__btn-menu'>
						<a href='#!' className='js-navButton' title='Menú mobile' onClick={openMenu}>Menú mobile</a>
					</div>

					<nav className='c-header__nav'>
						<ul>
							<li>
								{/* <Link className='c-header__nav-open js-openSub' href='#!' title='Más sobre Nuestra facultad'></Link> */}
								{/* <Link className='c-header__nav-with js-openSub' onClick={() => openSubMenu(event)} href='#!' title='Nuestra facultad'> <Icons name='down'></Icons> Nuestra facultad</Link> */}
								<a href='#!' className='c-header__nav-with js-openSub' title='Nuestra facultad' onClick={openSubMenu}><Icons name='down'></Icons> Nuestra facultad</a>
								<div className='c-header__submenu js-subMenu'>
									<ul className='o-container'>
										<li>
											<ul>
												<li><Link href='#!' title='Publicaciones'>Publicaciones</Link></li>
												<li><Link href='#!' title='Mensaje'>Mensaje</Link></li>
												<li><Link href='#!' title='Presentación'>Presentación</Link></li>
												<li><Link href='#!' title='Directorio'>Directorio</Link></li>
											</ul>
										</li>
										<li>
											<Link href='#!' title='Instalaciones'>
												<span><CustomImage src='/images/menu/La-Salle-Menu-instalaciones.png' width='560' height='360' alt='Nuestra Facultad Instalaciones'/></span>
												<strong>Instalaciones</strong>
											</Link>
										</li>
										<li>
											<Link href='#!' title='Acreditaciones y Alianzas'>
												<span><CustomImage src='/images/menu/La-Salle-Menu-Acreditaciones-Alianzas.png' width='560' height='360' alt='Nuestra Facultad Acreditaciones y Alianzas'/></span>
												<strong>Acreditaciones y Alianzas</strong>
											</Link>
										</li>
										<li>
											<Link href='#!' title='Claustro Docente'>
												<span><CustomImage src='/images/menu/La-Salle-Menu-Claustro-Docente.png' width='560' height='360' alt='Nuestra Facultad Claustro Docente'/></span>
												<strong>Claustro Docente</strong>
											</Link>
										</li>
									</ul>
								</div>
							</li>
							<li>
								<Link href='#!' title='Investigación'>Investigación</Link>
							</li>
							<li>
								{/* <Link className='c-header__nav-open js-openSub' href='#!' title='Más de Publicaciones'></Link> */}
								<a href='#!' className='c-header__nav-with js-openSub' title='Publicaciones' onClick={openSubMenu}><Icons name='down'></Icons> Publicaciones</a>
								<div className='c-header__submenu js-subMenu'>
									<ul className='o-container'>
										<li>
											<Link href='#!' title='Repositorio'>
											<span><CustomImage src='/images/menu/La-Salle-Menu-Repositorio.png' width='560' height='360' alt='Publicaciones Repositorio'/></span>
												<strong>Repositorio</strong>
											</Link>
										</li>
										<li>
											<Link href='#!' title='Revistas'>
											<span><CustomImage src='/images/menu/La-Salle-Menu-Revistas.png' width='560' height='360' alt='Publicaciones Revistas'/></span>
												<strong>Revistas</strong>
											</Link>
										</li>
										<li>
											<Link href='#!' title='Video Blog'>
											<span><CustomImage src='/images/menu/La-Salle-Menu-Video-Blog.png' width='560' height='360' alt='Publicaciones Video Blog'/></span>
												<strong>Video Blog</strong>
											</Link>
										</li>
									</ul>
								</div>
							</li>
							<li>
								{/* <Link className='c-header__nav-open js-openSub' href='#!' title='Más de Excelencia educativa'></Link> */}
								<a href='#!' className='c-header__nav-with js-openSub' title='Excelencia educativa' onClick={openSubMenu}><Icons name='down'></Icons> Excelencia educativa</a>
								<div className='c-header__submenu js-subMenu'>
									<ul className='o-container'>
										<li>
											<Link href='#!' title='Proyectos Prestigio'>
											<span><CustomImage src='/images/menu/La-Salle-Menu-Proyectos-Prestigio.png' width='560' height='360' alt='Excelencia educativa Proyectos Prestigio'/></span>
												<strong>Proyectos Prestigio</strong>
											</Link>
										</li>
										<li>
											<Link href='#!' title='Catedras Primas'>
											<span><CustomImage src='/images/menu/La-Salle-Menu-Catedras-Primas.png' width='560' height='360' alt='Excelencia educativa Catedras Primas'/></span>
												<strong>Catedras Primas</strong>
											</Link>
										</li>
										<li>
											<Link href='#!' title='Premios'>
											<span><CustomImage src='/images/menu/La-Salle-Menu-Premios.png' width='560' height='360' alt='Excelencia educativa Premios'/></span>
												<strong>Premios</strong>
											</Link>
										</li>
									</ul>
								</div>
							</li>
							<li>
								{/* <Link className='c-header__nav-open js-openSub' href='#!' title='Más de Perfiles'></Link> */}
								<a href='#!' className='c-header__nav-with js-openSub' title='Perfiles' onClick={openSubMenu}><Icons name='down'></Icons> Perfiles</a>
								<div className='c-header__submenu js-subMenu'>
									<ul className='o-container'>
										<li>
											<ul>
												<li><Link href='#!' title='Estudiantes de Preparatoria'>Estudiantes de Preparatoria</Link></li>
												<li><Link href='#!' title='Estudiante de Licenciatura'>Estudiante de Licenciatura</Link></li>
												<li><Link href='#!' title='Estudiante de Posgrado'>Estudiante de Posgrado</Link></li>
											</ul>
										</li>
										<li>
											<Link href='#!' title='Aspirante'>
												<span><CustomImage src='/images/menu/La-Salle-Menu-Aspirante.png' width='560' height='360' alt='Nuestra Facultad Aspirante'/></span>
												<strong>Aspirante</strong>
											</Link>
										</li>
										<li>
											<Link href='#!' title='Docente'>
												<span><CustomImage src='/images/menu/La-Salle-Menu-Docente.png' width='560' height='360' alt='Nuestra Facultad Docente'/></span>
												<strong>Docente</strong>
											</Link>
										</li>
									</ul>
								</div>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}
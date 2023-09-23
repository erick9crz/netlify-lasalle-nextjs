'use client'
import Link from 'next/link';
import { Icons } from '../ui/Icons';
import { useEffect } from 'react';

export default function Search() {

	// Cierra el buscador
	const closeSearch = (event) => {
		event.preventDefault();

		const $mainContainer = document.querySelector('.c-page'),
			$searchContainer = document.querySelector('.js-search'),
			$inputSearch = document.querySelector('.js-search-input input');
		
		$mainContainer.classList.remove('m-mainWrapHide');
		$searchContainer.classList.remove('is-open');
		$inputSearch.blur();
		$inputSearch.value = '';
	}

	// Muestra o no el boton de reset para limpiar el input
	const handleKeyUp = (event) => {
		// // Aquí puedes acceder a event.key, event.target, etc.
		// console.log('Tecla presionada:', event.key);

		let that = event.target;

		if (that.value != '') {
			that.parentNode.classList.add('is-active');
		} else {
			that.parentNode.classList.remove('is-active');
		}
	};

	// Limpia el input del buscador
	const resetField = (event) => {
		event.preventDefault();

		const $inputSearch = document.querySelector('.js-search-input input');

		$inputSearch.value = '';
		$inputSearch.parentNode.classList.remove('is-active');
	}

	// Cierra el buscador al puchar la tecla 'ESC' del teclado
	const keyUpEsc = (event) => {
		const $mainContainer = document.querySelector('.c-page'),
			$searchContainer = document.querySelector('.js-search'),
			$inputSearch = document.querySelector('.js-search-input input');

		if (event.keyCode === 27) {
			$mainContainer.classList.remove('m-mainWrapHide');
			$searchContainer.classList.remove('is-open');
			$inputSearch.blur();
			$inputSearch.value = '';
		}
	};

	// Se utiliza el hook useEffect para agregar el evento keyup al documento 
	// cuando el componente se monta y lo eliminamos cuando el componente se 
	// desmonta para evitar problemas de fugas de memoria.
	useEffect(() => {
		// Agrega un oyente de eventos de teclado cuando el componente se monta
		document.addEventListener('keyup', keyUpEsc);
	
		// Elimina el oyente de eventos cuando el componente se desmonta
		return () => {
			document.removeEventListener('keyup', keyUpEsc);
		};
	}, []);
	

	return (
		<div className='c-search js-search'>
			<div className='o-container'>
				<a className='c-search__btnClose js-btnClose' href='#!' title='Cerrar buscador' onClick={closeSearch}><Icons name='close'></Icons></a>
			</div>

			<div className='c-search__inner c-search__inner--up'>
				<form className='c-search__form' action='#' method='GET' autoComplete='off'>
					<fieldset>
						<label>Encuentra lo que necesitas</label>
						<div className='c-search__form-input js-search-input'>
							<input type='text' name='search' placeholder='Escribe lo que deseas buscar' onKeyUp={handleKeyUp}/>
							<a className='c-search__form-btnReset' href='#!' title='Reset búsqueda' onClick={resetField}>Reset</a>
							<Icons name='seeker'></Icons>
						</div>
						<span className='c-search__info'>Pulsa ENTER para buscar o ESC para salir</span>
					</fieldset>
				</form>
			</div>
			<div className='c-search__inner c-search__inner--down'>
				<div className='c-search__related'>
					<div className='c-search__suggestion'>
						<h6>¿Te podemos sugerir?</h6>
						<ul>
							<li><Link href='#!' title='aspirantes'>aspirantes,</Link></li>
							<li><Link href='#!' title='estudiantes'>estudiantes,</Link></li>
							<li><Link href='#!' title='colaboradores'>colaboradores,</Link></li>
							<li><Link href='#!' title='egresados'>egresados,</Link></li>
							<li><Link href='#!' title='internatinal_student'>internatinal_student,</Link></li>
							<li><Link href='#!' title='faqs'>faqs</Link></li>
						</ul>
					</div>
					<div className='c-search__suggestion'>
						<h6>Nuestra oferta educativa</h6>
						<ul>
							<li><Link href='#!' title='preparatoria'>preparatoria,</Link></li>
							<li><Link href='#!' title='licenciaturas'>licenciaturas,</Link></li>
							<li><Link href='#!' title='especialidades'>especialidades,</Link></li>
							<li><Link href='#!' title='cursos'>cursos,</Link></li>
							<li><Link href='#!' title='diplomado'>diplomado</Link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

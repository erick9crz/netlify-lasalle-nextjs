import Link from 'next/link';
import { Icons } from '@/components/ui/Icons';
import CustomImage from '@/components/ui/CustomImage';

export default function Footer() {
	return (
		<footer className='c-footer'>
			<div className='c-footer__top'>
				<div className='o-container'>
					<div className='c-footer__redes'>
						<h6>Síguenos en:</h6>
						<ul>
							<li><Link href='#!' title='Facebook'> <Icons name='fb'></Icons> </Link></li>
							<li><Link href='#!' title='Twitter'> <Icons name='tw'></Icons> </Link></li>
							<li><Link href='#!' title='Youtube'> <Icons name='yt'></Icons> </Link></li>
							<li><Link href='#!' title='Instagram'> <Icons name='ig'></Icons> </Link></li>
							<li><Link href='#!' title='Linkedin'> <Icons name='in'></Icons> </Link></li>
							<li><Link href='#!' title='Snapchat'> <Icons name='sc'></Icons> </Link></li>
						</ul>
					</div>
					<div className='c-footer__sedes'>
						<label className='js-openFooterMenu'>Sistema y Red La Salle <Icons name='down'></Icons> </label>
						<ul className='js-subMenuFot'>
							<li><Link href='#!' title='Bajío'>Bajío</Link></li>
							<li><Link href='#!' title='Ciudad de México'>Ciudad de México</Link></li>
							<li><Link href='#!' title='Puebla'>Puebla</Link></li>
							<li><Link href='#!' title='Cancún'>Cancún</Link></li>
							<li><Link href='#!' title='Chihuahua'>Chihuahua</Link></li>
							<li><Link href='#!' title='Cuernavaca'>Cuernavaca</Link></li>
							<li><Link href='#!' title='Laguna'>Laguna</Link></li>
							<li><Link href='#!' title='Morelia'>Morelia</Link></li>
							<li><Link href='#!' title='Nezahualcoyotl'>Nezahualcoyotl</Link></li>
							<li><Link href='#!' title='Noroeste'>Noroeste</Link></li>
							<li><Link href='#!' title='Oaxaca'>Oaxaca</Link></li>
							<li><Link href='#!' title='Pachuca'>Pachuca</Link></li>
							<li><Link href='#!' title='Saltillo'>Saltillo</Link></li>
							<li><Link href='#!' title='Victoria'>Victoria</Link></li>
						</ul>
					</div>
				</div>
			</div>

			<div className='c-footer__bottom'>
				<div className='o-container'>
					<div className='c-footer__logotipos'>
						<ul>
							<li>
								<Link href='#!' title='La Salle Red de Universidades'> <CustomImage src='/images/global/La-Salle-Red-de-Universidades.png' width='300' height='111' alt='Red de Universidades'/> </Link>
							</li>
							<li>
								<Link href='#!' title='La Salle Universities'> <CustomImage src='/images/global/La-Salle-International-Association.png' width='300' height='111' alt='Universities'/> </Link>
							</li>
							<li>
								<Link href='#!' title='Universidad Segura'> <CustomImage src='/images/global/La-Salle-Universidad-Segura.png' width='300' height='111' alt='Universidad Segura'/> </Link>
							</li>
						</ul>
					</div>

					<div className='c-footer__global-nav'>
						<label className='js-openFooterMenu'>Legales <Icons name='down'></Icons> </label>
						<ul className='js-subMenuFot'>
							<li><Link href='#!' title='Terminos y condiciones'>Terminos y condiciones</Link></li>
							<li><Link href='#!' title='Aviso de privacidad'>Aviso de privacidad</Link></li>
							<li><Link href='#!' title='Mapa de sitio'>Mapa de sitio</Link></li>
							<li><Link href='#!' title='Preguntas frecuentes'>Preguntas frecuentes</Link></li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}

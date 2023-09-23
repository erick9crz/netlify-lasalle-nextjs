import 'normalize.css'
import '@/scss/globals.scss';
import { Inter } from 'next/font/google';
import { indiBold, indiBoldItalic, indiRegular, indiRegularItalic } from '@/hook/typefaces';
import Header from '@/components/template/Header';
import Search from '@/components/template/Search';
import Footer from '@/components/template/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Inicio - Ingenia',
	description: 'description',
}

export default function RootLayout({ children }) {
	return (
	// Forma de importar mas de una fuente para todo nuestro proyecto y manejarlas mediante css
	<html lang='es' className={`${indiBold.variable} ${indiBoldItalic.variable} ${indiRegular.variable} ${indiRegularItalic.variable}`}>
		<body>
			<Search/>
			<div className="c-page">
				<Header/>
				{children}
				<Footer/>
			</div>
			{/* forma de utilizar la fuente directamente en el HTML, en caso de que solo se ocupe en especifico tal fuente "demo2.className" */}
			{/* <h2 className={indiRegular.className}> texto demo</h2> */}

			
		</body>
	</html>
	)
}

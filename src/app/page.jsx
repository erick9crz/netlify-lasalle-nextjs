import NewsBanner from '@/components/ui/NewsBanner'
import Notices from '@/components/ui/Notices'
import Events from '@/components/ui/Events'
import About from '@/components/ui/About'
import Offer from '@/components/ui/Offer'
import Interest from '@/components/ui/Interest'
import Digital from '@/components/ui/Digital'
import Numeralia from '@/components/ui/Numeralia'
// import Image from 'next/image'
// import styles from './page.module.css'

export default function Home() {
	return (
		<main>
			<h1 className='o-titleHidden'>La Salle - Facultad de negocios</h1>
			<NewsBanner/>
			<Notices/>
			<Events/>
			<About/>
			<Offer/>
			<Interest/>
			<Digital/>
			<Numeralia/>
			
			
			{/* <>
				<div className={styles.description}>
					<p>
					Get started by Ingenia&nbsp;
					<code className={styles.code}>src/app/page.js</code>
					</p>
					<div>
					<a
						href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						By{' '}
						<Image
						src="/vercel.svg"
						alt="Vercel Logo"
						className={styles.vercelLogo}
						width={100}
						height={24}
						priority
						/>
					</a>
					</div>
				</div>

				<div className={styles.center}>
					<Image
					className={styles.logo}
					src="/next.svg"
					alt="Next.js Logo"
					width={180}
					height={37}
					priority
					/>
				</div>

				<div className={styles.grid}>
					<a
					href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
					>
					<h2>
						Docs <span>-&gt;</span>
					</h2>
					<p>Find in-depth information about Next.js features and API.</p>
					</a>

					<a
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
					>
					<h2>
						Learn <span>-&gt;</span>
					</h2>
					<p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
					</a>

					<a
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
					>
					<h2>
						Templates <span>-&gt;</span>
					</h2>
					<p>Explore the Next.js 13 playground.</p>
					</a>

					<a
					href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
					>
					<h2>
						Deploy <span>-&gt;</span>
					</h2>
					<p>
						Instantly deploy your Next.js site to a shareable URL with Vercel.
					</p>
					</a>
				</div>
			</> */}
		</main>
	)
}

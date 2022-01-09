import Head from 'next/head'
import Link from 'next/link'
import home from '../styles/home.module.css'

export default function Home() {
	return (
		<div className={home.container}>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<title>Frontend Mentor Challenges Solutions</title>
			</Head>
			<h1 className={home.title}>
				Frontend Mentor Challenges Solutions Using React.js and Next.js
			</h1>
			<nav>
				<ol>
					<li className={home.li}>
						<Link href='/challenges/newbie/nft-card'>
							<a className={home.ancor}>NFT CARD</a>
						</Link>
					</li>

					<li className={home.li}>
						<Link href='/challenges/newbie/order-summary'>
							<a className={home.ancor}>Order Summary</a>
						</Link>
					</li>

					<li className={home.li}>
						<Link href='/challenges/newbie/stats-preview'>
							<a className={home.ancor}>Stats Priview</a>
						</Link>
					</li>

					<li className={home.li}>
						<Link href='/challenges/newbie/three-columns'>
							<a className={home.ancor}>Three Columns</a>
						</Link>
					</li>
				</ol>
			</nav>
			<div className={home.attribution}>
				Challenge by
				<a
					href='https://www.frontendmentor.io?ref=challenge'
					target='_blank'
					rel='noreferrer'
				>
					Frontend Mentor
				</a>. Coded by <a href='https://github.com/ChristBM'>ChristBM</a>.
			</div>
		</div>
	)
}

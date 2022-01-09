import Link from 'next/link'
import home from '../styles/home.module.css'

export default function Home() {
	return (
		<div className={home.container}>
			<h1 className={home.title}>Forntend Mentor Challenges Solutions</h1>
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
				</ol>
			</nav>
		</div>
	)
}

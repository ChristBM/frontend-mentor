import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Player } from '@lottiefiles/react-lottie-player'
import home from '../styles/home.module.css'
import design_web from '@public/lottie/design-web.json'
import fluid from '@public/lottie/fluid.json'
import vercel from '@public/tecnologies/vercel-icon.svg'
import github from '@public/tecnologies/github-icon.svg'
import next from '@public/tecnologies/nextjs-icon.svg'
import react from '@public/tecnologies/react.svg'

interface Solutions {
	title: string
	href: string
}

/* Titles with only 3 words */
const data: Solutions[] = [
	{
		title: 'NFT preview card',
		href: '/challenges/newbie/nft-card',
	},
	{
		title: 'Order summary card',
		href: '/challenges/newbie/order-summary',
	},
	{
		title: 'Stats preview card',
		href: '/challenges/newbie/stats-preview',
	},
	{
		title: '3-column preview card',
		href: '/challenges/newbie/three-columns',
	},
	{
		title: 'Profile card component',
		href: '/challenges/newbie/profile-card',
	},
	{
		title: 'FAQ accordion card',
		href: '/challenges/newbie/faq-accordion',
	},
	{
		title: 'Social proof section',
		href: '/challenges/newbie/social-proof',
	},
	{
		title: 'Article preview component',
		href: '/challenges/newbie/article-preview',
	},
	{
		title: 'Feature section master',
		href: '/challenges/newbie/feature-section',
	},
	{
		title: 'Coming soon page',
		href: '/challenges/newbie/coming-soon',
	},
	{
		title: 'Signup form page',
		href: '/challenges/newbie/signup-form',
	},
	{
		title: 'Single price grid',
		href: '/challenges/newbie/single-price',
	},
	{
		title: 'Ping coming soon page',
		href: '/challenges/newbie/launching-soon',
	},
]

export default function Home() {
	return (
		<div className={home.container}>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<title>Frontend Mentor Challenges Solutions</title>
			</Head>
			<header className={home.header}>
				<h1 className={home.title}>
					<a
						href='https://www.frontendmentor.io/profile/ChristBM'
						target='_blank'
						rel='noreferrer'
						className={home.ancor}
					>
						Frontend Mentor
					</a>
					{` Challenges Solutions`}
					{` Coded by `}
					<a
						href='https://github.com/ChristBM'
						target='_blank'
						rel='noreferrer'
						className={home.ancor}
					>
						ChristBM
					</a>
				</h1>
				<Player
					autoplay={true}
					loop={true}
					hover={false}
					keepLastFrame={false}
					speed={1}
					src={design_web}
					style={{ height: 'auto', width: '250px' }}
				/>
				<a
					href='https://github.com/ChristBM/frontend-mentor'
					target='_blank'
					rel='noreferrer'
					className={home.repository}
				>
					<div className={home.repository_icon_cont} title='View Code'>
						<span className={home.repository_icon} />
					</div>
				</a>
			</header>
			<main className={home.main}>
				<h4 className={home.diffic}>
					Difficulty: <span className={home.diffic_lvl}>Newbie({data.length})</span>
				</h4>
				<ul className={home.list}>
					{data.map((d, index) => (
						<li className={home.li} key={d.title}>
							<Link href={d.href} passHref>
								<button className={home.btn}>
									{d.title}
									<span className={home.order}>
										<Player
											autoplay={true}
											loop={true}
											hover={false}
											keepLastFrame={false}
											speed={1}
											src={fluid}
											style={{ height: 'auto', width: '50px' }}
										/>
										<span className={home.order_text}>{index + 1}</span>
									</span>
								</button>
							</Link>
						</li>
					))}
				</ul>
			</main>
			<footer className={home.footer}>
				<div className={home.footer_icon}>
					<Image src={vercel} alt='vercel logo' width={20} height={20} />
					<p>Vercel</p>
				</div>
				<div className={home.footer_icon}>
					<Image src={github} alt='github logo' width={20} height={20} />
					<p>GitHub</p>
				</div>
				<div className={home.footer_icon}>
					<Image src={next} alt='nextjs logo' width={20} height={20} />
					<p>Next.js</p>
				</div>
				<div className={home.footer_icon}>
					<Image src={react} alt='reactjs logo' width={20} height={20} />
					<p>React.js</p>
				</div>
			</footer>
		</div>
	)
}

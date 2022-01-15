import { ReactElement } from 'react'
import comingsoon from './comingsoon.module.css'
import InputEmail from './InputEmail'

export default function ComingSoon(): ReactElement {
	return (
		<div className={comingsoon.container}>
			<header className={comingsoon.header}>
				<div className={comingsoon.logo} />
			</header>
			<picture className={comingsoon.picture}>
				<source media='(max-width: 375px)' srcSet='/coming-soon/hero-mobile.jpg' />
				<source media='(min-width: 1300px)' srcSet='/coming-soon/hero-desktop.jpg' />
				<img src='/coming-soon/hero-mobile.jpg' alt='promo image' />
			</picture>
			<main className={comingsoon.main}>
				<div className={comingsoon.texts_cont}>
					<h1 className={comingsoon.title}>
						We{`'`}re <br />
						<span className={comingsoon.title_bold}>
							coming <br /> soon
						</span>
					</h1>
					<p className={comingsoon.text}>
						Hello fellow shoppers! We{`'`}re currently building our new fashion store. Add
						your email below to stay up-to-date with announcements and our launch deals.
					</p>
				</div>
				<div>
					<InputEmail />
				</div>
			</main>
		</div>
	)
}

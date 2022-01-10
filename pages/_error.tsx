import Link from 'next/link'
import { Player } from '@lottiefiles/react-lottie-player'
import error from '@public/lottie/404-error.json'

export default function FourOhFour() {
	return (
		<div className='error'>
			<Player
				autoplay={true}
				loop={true}
				hover={false}
				keepLastFrame={false}
				speed={1}
				src={error}
				style={{ height: 'auto', width: '100%' }}
			/>
			<h3 className='error__info'>Page Not Found</h3>
			<Link href='/'>
				<a className='error__back'>Go back home</a>
			</Link>
			<style jsx>{`
				.error {
					display: flex;
					width: 100%;
					height: 100vh;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
				.error__info {
					padding-block-end: 10px;
					font-family: Helvetica;
					color: balck;
					font-size: 2.5rem;
				}
				.error__back {
					text-decoration: none;
					font-family: Helvetica;
					color: blue;
					font-size: 1.8rem;
				}
				.error__back:hover {
					text-decoration: underline;
				}
			`}</style>
		</div>
	)
}

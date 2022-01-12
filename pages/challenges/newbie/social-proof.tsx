import { ReactElement } from 'react'
import Head from 'next/head'
import SocialProof from '@components/SocialProof/SocialProof'

export default function Social_proof(): ReactElement {
	return (
		<div className='social_proof'>
			<Head>
				<title>Social proof section</title>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
				<link
					href='https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<div className='social_proof__bg-top' />
			<SocialProof />
			<div className='social_proof__bg-bottom' />
			<style jsx>{`
				.social_proof {
					display: flex;
					width: 100%;
					min-height: 100vh;
					padding-block-start: 80px;
					padding-block-end: 100px;
					position: relative;
					justify-content: center;
					align-items: center;
					background-color: hsl(0, 0%, 100%);
					overflow-x: hidden;
				}
				.social_proof__bg-top {
					width: 375px;
					height: 250px;
					position: absolute;
					top: 0;
					left: 0;
					background-image: url('/social_proof/bg-pattern-top-mobile.svg');
					background-repeat: no-repeat;
				}
				.social_proof__bg-bottom {
					width: 375px;
					height: 500px;
					position: absolute;
					bottom: 0;
					right: 0;
					background-image: url('/social_proof/bg-pattern-bottom-mobile.svg');
					background-repeat: no-repeat;
				}
				@media screen and (min-width: 375px) {
					.social_proof__bg-top {
						width: 584px;
						height: 362px;
						background-image: url('/social_proof/bg-pattern-top-desktop.svg');
						background-repeat: no-repeat;
					}
					.social_proof__bg-bottom {
						width: 1085px;
						height: 673px;
						background-image: url('/social_proof/bg-pattern-bottom-desktop.svg');
						background-repeat: no-repeat;
					}
				}
			`}</style>
		</div>
	)
}

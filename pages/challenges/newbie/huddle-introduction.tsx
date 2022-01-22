import Head from 'next/head'
import { ReactElement } from 'react'
import HuddleIntro from '@components/HuddleIntroduction/HuddleIntro'

const Violet: string = 'hsl(257, 40%, 49%)';

export default function Huddle_introduction(): ReactElement {
	return (
		<div className='huddle_intro'>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
				<link
					href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap'
					rel='stylesheet'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<HuddleIntro />
			<style jsx>{`
				.huddle_intro {
					display: flex;
					width: 100%;
					min-height: 100vh;
					flex-direction: column;
					align-items: center;
          background-image: url('/huddle_introduction/bg-mobile.svg');
          background-color: ${Violet};
          background-repeat: no-repeat;
          background-size: contain;
					background-position: top ;
				}
        @media screen and (min-width: 765px) {
          .huddle_intro {
            background-image: url('/huddle_introduction/bg-desktop.svg');
          }
        }
			`}</style>
		</div>
	)
}

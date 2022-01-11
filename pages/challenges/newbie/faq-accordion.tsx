import { ReactElement } from 'react'
import Head from 'next/head'
import FaqAccordion from '@components/FaqAccordion/FaqAccordion'

export default function Faq_accordion(): ReactElement {
	return (
		<div className='faq_accordion'>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
				<link
					href='https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<FaqAccordion />
			<style jsx>{`
				.faq_accordion {
					display: flex;
					width: 100%;
					min-height: 100vh;
					padding-block-start: 110px;
					padding-block-end: 100px;
					background-image: linear-gradient(
						to bottom,
						#af67e9,
						#9f67e9,
						#8d66e9,
						#7a66e8,
						#6565e7
					);
					justify-content: center;
					align-items: center;
				}
			`}</style>
		</div>
	)
}

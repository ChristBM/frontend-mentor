import React, { ReactElement } from 'react'
import FeatureSection from '@components/FeatureSection/FeatureSection'
import Head from 'next/head'

export default function Feature_section(): ReactElement {
	return (
		<div className='feature_section'>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
				<link
					href='https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<FeatureSection />
			<style jsx>{`
				.feature_section {
					display: flex;
					width: 100%;
					min-height: 100vh;
					padding-block-start: 82px;
					padding-block-end: 75px;
					justify-content: center;
					background-color: hsl(0, 0%, 98%);
				}
				@media screen and (min-width: 1120px) {
					.feature_section {
						padding-block-start: 82px;
					}
				}
			`}</style>
		</div>
	)
}

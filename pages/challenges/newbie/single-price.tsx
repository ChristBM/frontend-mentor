import React, { ReactElement } from 'react'
import Head from 'next/head'
import SinglePrice from '@components/SinglePrice/SinglePrice'

export default function Single_price(): ReactElement {
	return (
		<div className='single_price'>
			<Head>
				<title>Single price grid component</title>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
				<link
					href='https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<SinglePrice />
			<style jsx>{`
				.single_price {
					display: flex;
					width: 100%;
					min-height: 100vh;
					padding-block: 70px;
					justify-content: center;
					align-items: center;
					background-color: hsl(204, 43%, 93%);
				}
				@media screen and (min-width: 640px) {
					.single_price {
						padding-block: 162px;
					}
				}
			`}</style>
		</div>
	)
}

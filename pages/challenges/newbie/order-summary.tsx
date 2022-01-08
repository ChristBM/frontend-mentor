import React, { ReactElement } from 'react'
import Head from 'next/head'
import OrderSummary from '@components/OrderSummary/OrderSummary'

export default function Order_summary(): ReactElement {
	return (
		<div className='order_summary'>
			<Head>
				<title>Order Summary Card Solution</title>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
				<link
					href='https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<OrderSummary />
			<style jsx>{`
				.order_summary {
					display: flex;
					width: 100%;
					height: 100vh;
					justify-content: center;
					align-items: center;
					background-image: url('/order_summary/pattern-background-mobile.svg');
					background-color: hsl(225, 100%, 94%);
					background-repeat: no-repeat;
					font-family: 'Red Hat Display', Helvetica;
				}
				@media screen and (min-width: 375px) {
					.order_summary {
						height: 900px;
						background-image: url('/order_summary/pattern-background-desktop.svg');
					}
				}
			`}</style>
		</div>
	)
}

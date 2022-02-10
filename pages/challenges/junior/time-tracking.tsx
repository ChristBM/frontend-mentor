import { ReactElement } from 'react'
import Head from 'next/head'
import TimeTracking from '@components/TimeTracking/TimeTracking'

export default function Time_tracking(): ReactElement {
	return (
		<div className='time-tracking'>
			<Head>
				<title>Article preview component</title>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
				<link
					href='https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<TimeTracking />
			<style jsx>{`
				.time-tracking {
					display: flex;
					width: 100%;
					min-height: 100vh;
					padding: 80px 0;
					justify-content: center;
					background-color: hsl(226, 43%, 10%);
				}
				@media screen and (min-width: 1120px) {
					.time-tracking {
						padding: 250px 0;
					}
				}
			`}</style>
		</div>
	)
}

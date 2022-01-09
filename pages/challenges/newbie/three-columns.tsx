import Head from 'next/head'
import { ReactElement } from 'react'
import ThreeColumns from '@components/ThreeColumns/ThreeColumns'

export default function Three_columns(): ReactElement {
	return (
		<div className='three_columns'>
			<Head>
				<title>3-Column Preview Card Component</title>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
				<link
					href='https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700&display=swap'
					rel='stylesheet'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<ThreeColumns />
			<style jsx>{`
				.three_columns {
					display: flex;
					width: 100%;
					height: 1500px;
					background-color: hsl(0, 0%, 95%);
					justify-content: center;
					align-items: center;
				}
				@media screen and (min-width: 930px) {
					.three_columns {
						height: 100vh;
					}
				}
			`}</style>
		</div>
	)
}

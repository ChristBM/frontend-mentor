import { ReactElement } from 'react'
import Head from 'next/head'
import NftCard from '@components/NftCard/NftCard'

export default function Nft_card(): ReactElement {
	return (
		<div className='nft_card_page'>
			<Head>
				<title>NFT Card Component Solution</title>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
				<link
					href='https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<NftCard />
			<style jsx>{`
				.nft_card_page {
					display: flex;
					with: 100%;
					height: 100vh;
					justify-content: center;
					align-items: center;
					background-color: hsl(217, 54%, 11%);
					font-family: 'Outfit', Helvetica;
				}
			`}</style>
		</div>
	)
}

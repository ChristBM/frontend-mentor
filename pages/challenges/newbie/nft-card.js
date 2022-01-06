import Head from 'next/head'
import NftCard from '../../../components/NftCard/NftCard'

export default function nft_card() {
	return (
		<div className='nft_card_page'>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
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

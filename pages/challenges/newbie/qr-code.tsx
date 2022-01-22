import { ReactElement } from 'react'
import Head from 'next/head'
import QrCode from '@components/QrCode/QrCode'

const Lightgray: string = 'hsl(212, 45%, 89%)'

export default function Qr_code(): ReactElement {
	return (
		<div className='qr_code'>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
				<link
					href='https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<QrCode />
			<style jsx>{`
        .qr_code {
          display: flex;
          width: 100%;
          min-height: 100vh;
          background-color: ${Lightgray};
          justify-content: center;
          align-items: center;
        }
      `}</style>
		</div>
	)
}

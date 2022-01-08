import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/global.css'

function App({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<title>Frontend Mentor Solutions</title>
			</Head>
			<Component {...pageProps} />
		</div>
	)
}

export default App

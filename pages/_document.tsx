import Document, { Html, Head, Main, NextScript } from 'next/document'
import Favicon from '@components/Favicon/Favicon'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta name="description" content="Hi, I'm ChristBM and these are my Frontend Mentor Solutions, Happy Hacking!"/>
					<meta name="robots" content="index-follow"/>
					<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
					<Favicon />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument

import { ReactElement } from 'react'
import ArticlePreview from '@components/ArticlePreview/ArticlePreview'
import Head from 'next/head'

export default function Article_preview(): ReactElement {
	return (
		<div className='article_preview'>
			<Head>
				<title>Article preview component</title>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
				<link
					href='https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<ArticlePreview />
			<style jsx>{`
				.article_preview {
					display: flex;
					width: 100%;
					min-height: 100vh;
					justify-content: center;
					align-items: center;
					background-color: hsl(210, 46%, 95%);
				}
			`}</style>
		</div>
	)
}

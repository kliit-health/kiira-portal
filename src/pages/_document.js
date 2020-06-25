import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import { theme } from '../theme'

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="theme-color" content={theme.palette.primary.main} />
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
					/>
					<link href="/fonts/Avenir-Book.ttf" as="font" />
					<link href="/fonts/Poppins-Regular.otf" as="font" />
					<link href="/fonts/Poppins-Thin.otf" as="font" />
					<link href="/fonts/Poppins-Light.otf" as="font" />
					<link href="/fonts/Poppins-Bold.otf" as="font" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

MyDocument.getInitialProps = async context => {
	const sheets = new ServerStyleSheets()
	const originalRenderPage = context.renderPage

	context.renderPage = () =>
		originalRenderPage({
			enhanceApp: App => props => sheets.collect(<App {...props} />)
		})

	const initialProps = await Document.getInitialProps(context)

	return {
		...initialProps,
		styles: [
			...React.Children.toArray(initialProps.styles),
			sheets.getStyleElement()
		]
	}
}

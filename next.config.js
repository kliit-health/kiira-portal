const Dotenv = require('dotenv-webpack')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts')

// styles are applyed only after a refresh ** dev only **.
//github.com/vercel/next.js/issues/10752

module.exports = withFonts(
	withCSS(
		withSass({
			enableSvg: true,
			webpack: (config, options) => {
				config.plugins.push(new Dotenv({ silent: true }))
				return config
			},
			distDir: 'nextjs',
			env: {
				FIREBASE_PROJECT_ID: 'kliit-health-dev'
			},
			experimental: {
				sprFlushToDisk: false
			}
		})
	)
)

const withSass = require('@zeit/next-sass')
const Dotenv = require('dotenv-webpack')

// styles are applyed only after a refresh ** dev only **.
//github.com/vercel/next.js/issues/10752

https: module.exports = withSass({
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.plugins.push(new Dotenv({ silent: true }))

		return config
	}
})

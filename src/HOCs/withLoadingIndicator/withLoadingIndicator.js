import { LoadingIndicator } from 'components'
import { useState, useEffect } from 'react'
import timeout from 'smart-timeout'

export const withLoadingIndicator = (key = 'loading') => WrappedComponent => {
	const WithRedirectWrapper = props => {
		const [isLoading, setIsLoading] = useState(true)
		useEffect(() => {
			if (!props[key]) {
				setTimeout(() => setIsLoading(false), 1000)
			}
		}, [props[key]])
		return isLoading ? <LoadingIndicator /> : <WrappedComponent {...props} />
	}

	return WithRedirectWrapper
}

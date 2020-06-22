import { LoadingIndicator } from 'components'
import { useState, useEffect } from 'react'

export const withLoadingIndicator = (
	key = 'loading',
	initialState = true
) => WrappedComponent => {
	const WithRedirectWrapper = props => {
		const [isLoading, setIsLoading] = useState(initialState)
		useEffect(() => {
			if (!props[key]) {
				setTimeout(() => setIsLoading(false), 1000)
			}
		}, [props[key]])
		return isLoading ? <LoadingIndicator /> : <WrappedComponent {...props} />
	}
	return WithRedirectWrapper
}

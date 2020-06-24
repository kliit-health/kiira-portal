import { useState, useEffect } from 'react'
import { LoadingIndicator } from 'components'

export const withLoadingIndicator = (
	loadingKey = 'authLoading',
	initialState = true
) => WrappedComponent => {
	const WithRedirectWrapper = props => {
		const [isLoading, setIsLoading] = useState(initialState)
		useEffect(() => {
			if (!props[loadingKey]) {
				setTimeout(() => setIsLoading(false), 1000)
			}
		}, [props[loadingKey]])

		return isLoading ? <LoadingIndicator /> : <WrappedComponent {...props} />
	}
	return WithRedirectWrapper
}

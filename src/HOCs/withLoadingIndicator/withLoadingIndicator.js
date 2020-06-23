import { LoadingIndicator } from 'components'
import { useState, useEffect } from 'react'

export const withLoadingIndicator = (
	loadingKey = 'authLoading',
	dataKey,
	initialState = false
) => WrappedComponent => {
	const WithRedirectWrapper = props => {
		const [isLoading, setIsLoading] = useState(initialState)
		useEffect(() => {
			if (dataKey) {
				if (!props[loadingKey] && !props[dataKey]) {
					setTimeout(() => setIsLoading(false), 1000)
				}
			} else {
				if (!props[loadingKey]) {
					setTimeout(() => setIsLoading(false), 1000)
				}
			}
		}, [props[loadingKey]])
		return isLoading ? <LoadingIndicator /> : <WrappedComponent {...props} />
	}
	return WithRedirectWrapper
}

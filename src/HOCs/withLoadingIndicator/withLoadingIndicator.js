import { useState, useEffect } from 'react'
import { LoadingIndicator } from 'src/components'

export const withLoadingIndicator = (
	loadingKey = 'authLoading',
	initialState = true
) => WrappedComponent => {
	const WithRedirectWrapper = props => {
		const [isLoading, setLoading] = useState(initialState)
		useEffect(() => {
			if (!props[loadingKey]) {
				setTimeout(() => setLoading(false), 1000)
			}
		}, [props[loadingKey]])
		return isLoading ? <LoadingIndicator /> : <WrappedComponent {...props} />
	}
	return WithRedirectWrapper
}

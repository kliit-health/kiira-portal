import { LoadingIndicator } from 'components'
import { useState, useEffect } from 'react'

export const withLoadingIndicator = (
	loadingKey = 'authLoading',
	dataKey = 'authDetails'
) => WrappedComponent => {
	const WithRedirectWrapper = props => {
		// const [isLoading, setIsLoading] = useState(initialState)
		// console.log(props)
		// useEffect(() => {
		// 	if (!props[loadingKey]) {
		// 		setTimeout(() => setIsLoading(false), 1000)
		// 	}
		// }, [props[loadingKey]])

		return props[loadingKey] && !props[dataKey] ? (
			<LoadingIndicator />
		) : (
			<WrappedComponent {...props} />
		)
	}
	return WithRedirectWrapper
}

import { LoadingIndicator } from 'components'

export const withLoadingIndicator = (key = 'loading') => WrappedComponent => {
	const WithRedirectWrapper = props => {
		return props[key] ? <LoadingIndicator /> : <WrappedComponent {...props} />
	}
	return WithRedirectWrapper
}

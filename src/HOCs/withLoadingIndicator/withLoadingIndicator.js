import { LoadingIndicator } from 'components'

export const withLoadingIndicator = WrappedComponent => {
	const WithRedirectWrapper = props => {
		const { loading } = props.user
		return loading ? <LoadingIndicator /> : <WrappedComponent {...props} />
	}
	return WithRedirectWrapper
}

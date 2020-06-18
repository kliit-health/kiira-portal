import { useRouter } from 'next/router'
import { isClient } from 'helpers/functions'

/**
 * @description redirect to specified route
 * @param { string } location path of the location you want to redirect. Defaults to "/login".
 * @param { boolean } requireAuth  whether authentication is required in order to redirect. Defaults to false.
 */

// TODO: Server side implementation is missing

export const withRedirect = (
	location = '/login',
	requireAuth = false
) => WrappedComponent => {
	const WithRedirectWrapper = props => {
		const { details, loading } = props.user
		const router = useRouter()

		if (loading) return null

		if (requireAuth && details && isClient()) {
			router.push(location)
			return null
		}

		if (!details && !requireAuth && isClient()) {
			router.push(location)
			return null
		}
		return <WrappedComponent {...props} />
	}
	return WithRedirectWrapper
}

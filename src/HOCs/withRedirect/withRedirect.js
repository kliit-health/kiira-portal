import { useRouter } from 'next/router'
import { isClient } from 'helpers/functions'

const isBrowser = isClient()

export const withRedirect = (
	key,
	location,
	isProtected = true
) => WrappedComponent => {
	const WithRedirectWrapper = props => {
		const router = useRouter()

		if (!props[key] && isProtected && isBrowser) {
			router.replace(location)
			return null
		}

		if (props[key] && !isProtected && isBrowser) {
			router.replace(location)
			return null
		}

		return <WrappedComponent {...props} />
	}
	WithRedirectWrapper.getInitialProps = async context => {
		// TODO: implement server side redirect
		return {}
	}
	return WithRedirectWrapper
}

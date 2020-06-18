import { useRouter } from 'next/router'
import { isClient } from 'helpers/functions'

export const withRedirect = WrappedComponent => {
	const WithRedirectWrapper = props => {
		const { details, loading } = props.user
		const router = useRouter()

		const isBrowser = isClient()
		if (loading) return null
		if (isBrowser && !details) {
			router.push('/login')
			return null
		}
		return <WrappedComponent {...props} />
	}
	return WithRedirectWrapper
}

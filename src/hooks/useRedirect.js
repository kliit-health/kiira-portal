import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { isClient } from 'src/helpers/functions'

const isBrowser = isClient()

export const useRedirect = ({ redirect = false, location = '/', callback }) => {
	const router = useRouter()

	useEffect(() => {
		if (redirect) {
			if (isBrowser) {
				router.replace(location)
				if (callback) {
					callback()
				}
			} else {
				console.error('Server side redirect not supported.')
			}
		}
	}, [redirect, location, router])
}

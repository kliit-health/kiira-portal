import { Header } from 'components/header'
import { useRouter } from 'next/router'
import styles from './layout.module.scss'

export const Layout = ({ children, user, ...rest }) => {
	const router = useRouter()

	const isLoginPage = router.pathname === '/login'
	return isLoginPage ? (
		<div>{children}</div>
	) : (
		<div>
			<Header {...rest} />
			{children}
		</div>
	)
}

import { cloneElement } from 'react'
import { IconButton } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { useRouter } from 'next/router'
import { Sidebar } from 'components'
import styles from './layout.module.scss'

export const Layout = ({ children }) => {
	const router = useRouter()

	const isLoginPage = router.pathname === '/login'

	return isLoginPage ? (
		cloneElement(children)
	) : (
		<div className={styles.layout}>
			<Sidebar />
			{children}
			{/* <IconButton className={styles['icon-button']} color="primary">
				<ExitToAppIcon />
			</IconButton> */}
		</div>
	)
}

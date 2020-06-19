import { Sidebar } from 'components'
import styles from './withSidebar.module.scss'

export const withSidebar = WrappedComponent => {
	const WithSidebarWrapper = props => {
		return (
			<div className={styles.container}>
				<Sidebar />
				<WrappedComponent {...props} />
			</div>
		)
	}
	return WithSidebarWrapper
}

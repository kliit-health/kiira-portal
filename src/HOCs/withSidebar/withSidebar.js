import { Sidebar } from 'components'
import './styles.scss'

export const withSidebar = WrappedComponent => {
	const WithSidebarWrapper = props => {
		return (
			<div className="with-sidebar">
				<Sidebar />
				<WrappedComponent {...props} />
			</div>
		)
	}
	return WithSidebarWrapper
}

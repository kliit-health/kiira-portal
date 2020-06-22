import React from 'react'
import { ProfileCard, LogoCard, Sidebar } from './components'

import './styles.scss'

export const withSidebar = WrappedComponent => {
	const WithSidebarWrapper = props => {
		const { firstName, lastName, email } = props.authDetails.profileInfo
		return (
			<div className="with-sidebar">
				<Sidebar>
					<LogoCard />
					<div className="with-sidebar__menu">
						<ProfileCard
							firstName={firstName}
							lastName={lastName}
							email={email}
						/>
					</div>
				</Sidebar>
				<WrappedComponent {...props} />
			</div>
		)
	}
	return WithSidebarWrapper
}

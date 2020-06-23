import {
	ProfileCard,
	LogoCard,
	Sidebar,
	Section,
	SectionItem
} from './components'
import { sections } from './models'
import { useRouter } from 'next/router'
import './styles.scss'
import { auth } from 'firebase'

export const withSidebar = WrappedComponent => {
	const WithSidebarWrapper = props => {
		const router = useRouter()

		if (!props.authDetails) return null

		const { firstName, lastName, email } = props.authDetails.profileInfo

		const handleOnSection = path => {
			path && router.push(path)
		}

		const renderSections = () =>
			sections.map(section => {
				const { icon, title, classes, items, path } = section
				return (
					<Section
						key={title}
						icon={icon}
						title={title}
						onClick={() => handleOnSection(path)}
						classes={classes}
					>
						{items &&
							items.map(item => {
								const { title, path } = item
								return (
									<SectionItem
										key={title}
										title={title}
										onClick={() => handleOnSection(path)}
									/>
								)
							})}
					</Section>
				)
			})

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
						<div className="with-sidebar__sections">{renderSections()}</div>
					</div>
				</Sidebar>
				<WrappedComponent {...props} />
			</div>
		)
	}
	return WithSidebarWrapper
}

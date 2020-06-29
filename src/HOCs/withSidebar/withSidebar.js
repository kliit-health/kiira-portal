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

export const withSidebar = WrappedComponent => {
	const WithSidebarWrapper = props => {
		const router = useRouter()

		const { firstName, lastName, email } = props.authDetails.profileInfo

		const handleOnSection = path => {
			path && router.push(path)
		}

		const styles = {
			sidebar: 'with-sidebar',
			menu: 'with-sidebar__menu',
			sections: 'with-sidebar__sections'
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
			<div className={styles.sidebar}>
				<Sidebar>
					<LogoCard />
					<div className={styles.menu}>
						<ProfileCard
							firstName={firstName}
							lastName={lastName}
							email={email}
						/>
						<div className={styles.sections}>{renderSections()}</div>
					</div>
				</Sidebar>
				<WrappedComponent {...props} />
			</div>
		)
	}
	return WithSidebarWrapper
}

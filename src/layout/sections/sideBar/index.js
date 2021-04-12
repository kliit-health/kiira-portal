import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { Section, Item } from './components'
import model from './models'
import './styles.scss'

export const SideBar = () => {
	const router = useRouter()
	const organization = useSelector(state => state.organization.data)

	const styles = {
		root: 'side-bar',
		menu: 'side-bar__menu',
		sections: 'side-bar__sections',
		container: 'side-bar__logo-container',
		image: 'side-bar__logo-image'
	}

	const handleNavigation = ({ path }) => {
		if (path) {
			router.push(path)
		}
	}

	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<img
					className={styles.image}
					src={organization.imageUrl || '/assets/kiira_logo.svg'}
				/>
			</div>
			<div className={styles.sections}>
				{model.sections.map(({ title, classes, items, path, ...rest }) => (
					<Section
						key={title}
						title={title}
						onClick={handleNavigation}
						classes={classes}
						path={path}
						active={path === router.pathname}
						{...rest}
					>
						{items &&
							items.map(({ title, path }) => (
								<Item
									key={title}
									title={title}
									path={path}
									onClick={handleNavigation}
								/>
							))}
					</Section>
				))}
			</div>
		</div>
	)
}

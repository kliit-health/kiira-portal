import { compose, withProps } from 'recompose'
import { cloneElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { Selector, SideBar, TopBar } from './sections'
import { withRedirect, withLoadingIndicator } from 'src/HOCs'
import { updateUser } from 'src/redux/actions'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { signOut } from 'src/firebase'
import './styles.scss'
import './styles.scss'

const LayoutFoundation = ({ children, ...rest }) => {
	const router = useRouter()
	const dispatch = useDispatch()
	const user = useSelector(state => state.user.data)
	const organization = useSelector(state => state.organization.data)
	const entities = useSelector(state => state.entities.data)

	const handleNavigation = path => {
		router.push(path)
	}

	const handleSignOut = async () => {
		await signOut()
	}

	const handleSelection = id => {
		dispatch(
			updateUser({
				uid: user.uid,
				updates: { organizationId: id }
			})
		)
	}

	const styles = {
		root: 'layout',
		mainContainer: 'layout__main-container',
		container: 'layout__container',
		logoutButton: {
			root: 'layout__logout-button'
		}
	}

	return (
		<div className={styles.root}>
			<SideBar
				pathname={router.pathname}
				onRoute={handleNavigation}
				logoUrl={organization.logoUrl}
			/>
			<div className={styles.mainContainer}>
				<TopBar>
					{entities.length > 0 && (
						<Selector
							title={organization.name}
							data={entities}
							onSelect={handleSelection}
						/>
					)}
					<ExitToAppIcon
						classes={styles.logoutButton}
						onClick={handleSignOut}
					/>
				</TopBar>
				<div className={styles.container}>
					{cloneElement(children, { ...rest })}
				</div>
			</div>
		</div>
	)
}

export const Layout = compose(
	withProps(({ auth: { loading, details, error } }) => ({
		loading,
		details,
		error
	})),
	withLoadingIndicator('loading'),
	withRedirect('/', 'details')
)(LayoutFoundation)

import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { routes } from 'src/helpers/constants'
import { Typography, Button, CircularProgress } from 'src/components'
import { ClickIcon } from 'src/components/icons'
import { intl } from 'src/i18n'
import './styles.scss'

export const SignUps = ({}) => {
	const router = useRouter()

	const overview = useSelector(state => state.overview.data)
	const loading = useSelector(state => state.overview.loading)

	const handleInvite = () => {
		router.push(routes.activeUsers)
	}

	const styles = {
		root: 'sign-ups',
		button: { text: 'sign-ups__button-text' },
		container: 'sign-ups__container'
	}

	return (
		<div className={styles.root}>
			{loading ? (
				<CircularProgress />
			) : (
				<Fragment>
					<Typography gray h7 bold>
						{intl.activeUsers.description.toUpperCase()}
					</Typography>
					<div className={styles.container}>
						<ClickIcon />
						<Typography darkBlue h3>
							{overview.activeUsers}
						</Typography>
					</div>
					<Button onClick={handleInvite} link classes={styles.button}>
						{intl.seeAll.description}
					</Button>
				</Fragment>
			)}
		</div>
	)
}

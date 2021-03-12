import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { routes } from 'src/helpers/constants'
import { Typography, Button, CircularProgress } from 'src/components'
import { InvitesIcon } from 'src/components/icons'
import { intl } from 'src/i18n'
import './styles.scss'

export const InvitationsSent = () => {
	const overview = useSelector(state => state.overview.data)
	const loading = useSelector(state => state.overview.loading)

	const router = useRouter()

	const handleInvite = () => {
		router.push(routes.invitations)
	}

	const styles = {
		root: 'invitations-sent',
		button: { text: 'invitations-sent__button-text' },
		container: 'invitations-sent__container'
	}

	return (
		<div className={styles.root}>
			{loading ? (
				<CircularProgress />
			) : (
				<Fragment>
					<Typography gray h7 bold>
						{intl.invitationsSent.description.toUpperCase()}
					</Typography>
					<div className={styles.container}>
						<InvitesIcon />
						<Typography darkBlue h3>
							{overview.invitations}
						</Typography>
					</div>
					<Button onClick={handleInvite} link classes={styles.button}>
						{intl.inviteMoreUsers.description}
					</Button>
				</Fragment>
			)}
		</div>
	)
}

import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { useFirebaseFetch } from 'src/hooks'
import { collections } from 'src/firebase/constants'
import { routes } from 'src/helpers/constants'
import { Typography, Button, CircularProgress } from 'src/components'
import { InvitesIcon } from 'src/components/icons'
import { intl } from 'src/i18n'
import './styles.scss'

const InvitationsSent = ({ loading, count }) => {
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
					<Typography gray h8 bold>
						{intl.invitationsSent.description.toUpperCase()}
					</Typography>
					<div className={styles.container}>
						<InvitesIcon />
						<Typography darkBlue h4>
							{count}
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

export default InvitationsSent

import { Fragment } from 'react'
import { useFirebaseFetch } from 'src/hooks'
import { collections } from 'src/firebase/constants'
import { Typography, CircularProgress, Avatar } from 'src/components'
import { intl } from 'src/i18n'
import './styles.scss'

export const AccountDetails = ({
	details: { email, title, profileInfo, organizationId }
}) => {
	const queryConditions = [
		{ key: 'uid', operator: '==', value: organizationId }
	]
	const { loading, data } = useFirebaseFetch(
		collections.organizations,
		queryConditions
	)

	const styles = {
		root: 'account-details',
		avatarContainer: 'account-details__avatar-container',
		details: 'account-details__details',
		email: { root: 'profile-card__email' },
		name: { root: 'profile-card__name' },
		section: 'account-details__section'
	}

	return (
		<div className={styles.root}>
			{loading ? (
				<CircularProgress />
			) : (
				<Fragment>
					<div className={styles.section}>
						<Typography gray h8 bold>
							{intl.accountAdministrator.description.toUpperCase()}
						</Typography>
						<div className={styles.details}>
							<Typography
								charcoal
							>{`${profileInfo.firstName} ${profileInfo.lastName}`}</Typography>
							<Typography h8>{email}</Typography>
						</div>
					</div>

					<div className={styles.section}>
						<Typography gray h8 bold>
							{intl.title.description.toUpperCase()}
						</Typography>
						<Typography>{title}</Typography>
					</div>

					<div className={styles.section}>
						<Typography gray h8 bold>
							{intl.organizationName.description.toUpperCase()}
						</Typography>
						<Typography>{data[0].name}</Typography>
					</div>
				</Fragment>
			)}
		</div>
	)
}

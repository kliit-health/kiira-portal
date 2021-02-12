import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { routes } from 'src/helpers/constants'
import { Typography, Button, CircularProgress } from 'src/components'
import { InvitesIcon } from 'src/components/icons'
import { intl } from 'src/i18n'
import './styles.scss'

const Appointments = ({ loading, count }) => {
	const router = useRouter()

	const handleNavigation = () => {
		router.push(routes.appointments)
	}

	const styles = {
		root: 'appointments',
		button: { text: 'appointments__button-text' },
		container: 'appointments__container'
	}

	return (
		<div className={styles.root}>
			{loading ? (
				<CircularProgress />
			) : (
				<Fragment>
					<Typography gray h8 bold>
						{intl.appointmentsCreated.description.toUpperCase()}
					</Typography>
					<div className={styles.container}>
						<InvitesIcon />
						<Typography darkBlue h4>
							{count}
						</Typography>
					</div>
					<Button onClick={handleNavigation} link classes={styles.button}>
						{intl.seeDetails.description}
					</Button>
				</Fragment>
			)}
		</div>
	)
}

export default Appointments

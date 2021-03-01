import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { routes } from 'src/helpers/constants'
import { Typography, Button, CircularProgress } from 'src/components'
import { AppointmentIcon } from 'src/components/icons'
import { intl } from 'src/i18n'
import './styles.scss'

export const VideoVisits = ({ loading, count }) => {
	const router = useRouter()

	const handleNavigation = () => {
		router.push(routes.videoVisits)
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
					<Typography gray h7 bold>
						{intl.videoVisits.description.toUpperCase()}
					</Typography>
					<div className={styles.container}>
						<AppointmentIcon />
						<Typography darkBlue h3>
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

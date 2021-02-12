import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { useFirebaseFetch } from 'src/hooks'
import { collections } from 'src/firebase/constants'
import { routes } from 'src/helpers/constants'
import { Typography, Button, CircularProgress } from 'src/components'
import { ClickIcon } from 'src/components/icons'
import { intl } from 'src/i18n'
import './styles.scss'

const calculatePercentage = (active, total) => {
	const increase = (active - total) / total
	const response = increase * 100 + 100
	return `${response ? response.toFixed(1) : 0}%`
}

const SignUps = ({ loading, data }) => {
	const router = useRouter()

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
					<Typography gray h8 bold>
						{intl.totalSignUps.description.toUpperCase()}
					</Typography>
					<div className={styles.container}>
						<ClickIcon />
						<Typography darkBlue h4>
							{calculatePercentage(data.activeUsers, data.users)}
						</Typography>
					</div>
					<Button onClick={handleInvite} link classes={styles.button}>
						{intl.seeMoreDetails.description}
					</Button>
				</Fragment>
			)}
		</div>
	)
}

export default SignUps

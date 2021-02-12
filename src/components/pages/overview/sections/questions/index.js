import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { useFirebaseFetch } from 'src/hooks'
import { collections } from 'src/firebase/constants'
import { routes } from 'src/helpers/constants'
import { Typography, Button, CircularProgress } from 'src/components'
import { InvitesIcon } from 'src/components/icons'
import { intl } from 'src/i18n'
import './styles.scss'

const Questions = ({ loading, count }) => {
	const router = useRouter()

	const handleNavigation = () => {
		router.push(routes.questions)
	}

	const styles = {
		root: 'questions',
		button: { text: 'questions__button-text' },
		container: 'questions__container'
	}

	return (
		<div className={styles.root}>
			{loading ? (
				<CircularProgress />
			) : (
				<Fragment>
					<Typography gray h8 bold>
						{intl.questionsAsked.description.toUpperCase()}
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

export default Questions

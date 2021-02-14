import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { routes } from 'src/helpers/constants'
import { Typography, Button, CircularProgress } from 'src/components'
import { ChatIcon } from 'src/components/icons'
import { intl } from 'src/i18n'
import './styles.scss'

export const Chats = ({ loading, count }) => {
	const router = useRouter()

	const handleNavigation = () => {
		router.push(routes.chats)
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
						{intl.chats.description.toUpperCase()}
					</Typography>
					<div className={styles.container}>
						<ChatIcon />
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

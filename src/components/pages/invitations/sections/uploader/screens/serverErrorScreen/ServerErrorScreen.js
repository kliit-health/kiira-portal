import { Typography } from 'src/components'
import { intl } from 'src/i18n'
import './styles.scss'

export const ServerErrorScreen = () => {
	const styles = {
		root: 'server-error-screen',
		description: { root: 'server-error-screen__description' },
		image: 'server-error-screen__image'
	}

	return (
		<div className={styles.root}>
			<img className={styles.image} alt="" src="/assets/error.svg" />
			<Typography classes={styles.description}>
				{intl.technicalProblem.description}
			</Typography>
		</div>
	)
}

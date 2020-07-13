import { useContext } from 'react'
import { UploaderContext } from '../../Uploader'
import { intl } from 'src/i18n'
import { Button, Typography } from 'src/components'
import './styles.scss'

export const BadFileScreen = () => {
	const { handleRetry } = useContext(UploaderContext)

	const styles = {
		root: 'bad-file-screen',
		image: 'bad-file-screen__image',
		description: { root: 'bad-file-screen__description' }
	}

	return (
		<div className={styles.root}>
			<img className={styles.image} alt="" src="/assets/bad_csv.svg" />
			<Typography classes={styles.description}>
				{intl.badFile.description}
			</Typography>
			<Button onClick={handleRetry}>{intl.tryAgain.description}</Button>
		</div>
	)
}

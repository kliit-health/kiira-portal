import { useContext } from 'react'
import { UploaderContext } from '../../Uploader'
import { intl } from 'i18n'
import { Button, Typography } from 'components'
import './styles.scss'

const BAD_FILE =
	'Please verify the file format and layout. We recommend that you download and use the sample file to prevent issues.'

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
			<Typography classes={styles.description}>{BAD_FILE}</Typography>
			<Button onClick={handleRetry}>{intl.tryAgain.description}</Button>
		</div>
	)
}

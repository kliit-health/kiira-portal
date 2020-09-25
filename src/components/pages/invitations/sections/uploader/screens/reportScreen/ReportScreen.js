import { useContext } from 'react'
import { Typography } from 'src/components'
import { UploaderContext } from '../../Uploader'
import { intl } from 'src/i18n'
import './styles.scss'

export const ReportScreen = () => {
	const { response } = useContext(UploaderContext)

	const styles = {
		root: 'report-screen',
		image: 'report-screen__image'
	}

	return (
		<div className={styles.root}>
			<img className={styles.image} alt="" src="/assets/report.svg" />
			<Typography error={!Boolean(response)}>
				{response
					? intl.fileUploaded.description
					: intl.fileUploadFailed.description}
			</Typography>
			<Typography error={!Boolean(response)}>
				{response
					? intl.fileUploadedDescription.description
					: intl.fileUploadFailedDescription.description}
			</Typography>
		</div>
	)
}

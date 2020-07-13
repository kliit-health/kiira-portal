import { useContext, useEffect, useState } from 'react'
import { CSVLink } from 'react-csv'
import { Typography } from 'src/components'
import { UploaderContext } from '../../Uploader'
import { parseToCsv } from 'src/helpers/functions'
import { formatData } from './helpers'
import { intl } from 'src/i18n'
import './styles.scss'

export const ReportScreen = () => {
	const {
		response: { failed, succeded }
	} = useContext(UploaderContext)

	const styles = {
		root: 'report-screen',
		image: 'report-screen__image'
	}

	return (
		<div className={styles.root}>
			<img className={styles.image} alt="" src="/assets/report.svg" />
			{failed.length > 0 && <RejectedUsers failed={failed} />}
			{succeded.length > 0 && <CreatedUsers count={succeded.length} />}
		</div>
	)
}

const CreatedUsers = ({ count }) => {
	return (
		<div>
			{count === 1 ? (
				<Typography>{intl.sentOneInvitation.description}</Typography>
			) : (
				<Typography>{`${count} ${intl.invitationsSent.description}`}</Typography>
			)}
		</div>
	)
}

const RejectedUsers = ({ failed }) => {
	const [report, setReport] = useState(null)
	useEffect(() => {
		if (failed.length > 0) {
			const data = formatData(failed)
			parseToCsv(data).then(file => setReport(file))
		}
	}, [failed, formatData, setReport])

	const styles = {
		description: 'report-screen__description',
		link: 'report-screen__link'
	}

	return (
		<div className={styles.description}>
			<Typography>{`${intl.unableToSend.description} ${failed.length} ${intl.invitations.description}. `}</Typography>
			{report && (
				<CSVLink
					className={styles.link}
					filename={'kiira-invitations-report'}
					data={report}
				>
					{intl.download.description}
				</CSVLink>
			)}
			<Typography>{intl.fullReport.description}</Typography>
		</div>
	)
}

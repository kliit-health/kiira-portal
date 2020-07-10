import { useContext, useEffect, useState } from 'react'
import { CSVLink } from 'react-csv'
import { Typography } from 'components'
import { UploaderContext } from '../../Uploader'
import { parseToCsv } from 'helpers/functions'
import { formatData } from './helpers'
import './styles.scss'

export const ReportScreen = () => {
	const {
		response: { failed, succeded }
	} = useContext(UploaderContext)

	const styles = {
		root: 'report-screen',
		image: 'report-screen__image',
		link: 'report-screen__link'
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
	const styles = {
		link: 'report-screen__link'
	}

	return (
		<div>
			{count === 1 ? (
				<Typography>{`One invitation was successfully sent.`}</Typography>
			) : (
				<Typography>{`${count} invitations were successfully sent.`}</Typography>
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
			<Typography>{`Unable to send ${failed.length} invitations. `}</Typography>
			{report && (
				<CSVLink
					className={styles.link}
					filename={'kiira-invitations-report'}
					data={report}
				>
					Download
				</CSVLink>
			)}
			<Typography> the full report to find out more.</Typography>
		</div>
	)
}

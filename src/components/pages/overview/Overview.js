import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Page } from 'src/components'
import { intl } from 'src/i18n'
import {
	TopExperts,
	InvitationsSent,
	SignUps,
	AccountDetails,
	CommunicationChannel,
	Appointments,
	Questions
} from './sections'
import { getOverview } from 'src/redux/actions'
import { SectionContainer } from './components'
import './styles.scss'

export const Overview = ({ auth }) => {
	const dispatch = useDispatch()

	const loading = useSelector(state => state.overview.loading)
	const data = useSelector(state => state.overview.data)

	const [ref, setRef] = useState(null)
	const { organizationId } = auth.details

	useEffect(() => {
		dispatch(getOverview({ organizationId }))
	}, [])

	const styles = {
		page: { content: 'overview__page' },
		container: 'overview__container',
		mainContainer: 'overview__main-container'
	}

	return (
		<Page
			title={intl.overview.description}
			subtitle={intl.everthingInOnePlace.description}
			elementRef={ref}
			classes={styles.page}
		>
			<div className={styles.mainContainer}>
				<AccountDetails details={auth.details} />
				<div className={styles.container}>
					<InvitationsSent loading={loading} count={data.invitations} />
					<SignUps loading={loading} data={data} />
					<Appointments loading={loading} count={data.appointments} />
					<Questions loading={loading} count={data.questions} />
				</div>
				<div>
					<CommunicationChannel data={data} loading={loading} />
				</div>
			</div>

			<SectionContainer title={intl.topExperts.description}>
				<TopExperts onRefChange={setRef} />
			</SectionContainer>
		</Page>
	)
}

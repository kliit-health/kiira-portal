import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isEmpty } from 'lodash'
import { Page, DateRangePicker } from 'src/components'
import { intl } from 'src/i18n'
import { useLocalStorage } from 'src/hooks'
import {
	TopExperts,
	InvitationsSent,
	SignUps,
	Activity,
	VideoVisits,
	Chats,
	Interaction,
	InactiveUsers
} from './sections'
import moment from 'moment'
import { getOverview } from 'src/redux/actions'
import { SectionContainer } from './components'
import './styles.scss'

export const Overview = () => {
	const dispatch = useDispatch()

	const start = moment().add({ days: -15 })
	const end = moment()

	const organization = useSelector(state => state.organization.data)
	const [expertsRef, setExpertsRef] = useState(null)
	const [range, setRange] = useLocalStorage('range', [start, end])

	const styles = {
		page: { content: 'overview__page' },
		container: 'overview__container',
		chartsContainer: 'overview__charts-container'
	}

	const handleSubmit = range => {
		setRange(range)
	}

	useEffect(() => {
		if (range.length > 0) {
			dispatch(
				getOverview({
					organizationId: organization.uid,
					range
				})
			)
		}
	}, [range, organization])

	return (
		<Page
			title={intl.overview.description}
			subtitle={intl.everthingInOnePlace.description}
			elementRef={expertsRef}
			classes={styles.page}
		>
			<DateRangePicker onSubmit={handleSubmit} initialValue={range} />
			<div className={styles.chartsContainer}>
				<Activity range={range} />
				<Interaction />
			</div>
			<div className={styles.container}>
				<InvitationsSent />
				<SignUps />
				<VideoVisits />
				<Chats />
				<InactiveUsers />
			</div>
			<SectionContainer title={intl.topExperts.description}>
				<TopExperts onRefChange={setExpertsRef} />
			</SectionContainer>
		</Page>
	)
}

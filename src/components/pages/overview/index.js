import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Page } from 'src/components'
import { intl } from 'src/i18n'
import {
	TopExperts,
	InvitationsSent,
	SignUps,
	Activity,
	VideoVisits,
	Chats,
	Interaction
} from './sections'
import { getOverview } from 'src/redux/actions'
import { SectionContainer } from './components'
import './styles.scss'

export const Overview = () => {
	const dispatch = useDispatch()
	const loading = useSelector(state => state.overview.loading)
	const organization = useSelector(state => state.user.data)

	const [ref, setRef] = useState(null)

	useEffect(() => {
		dispatch(getOverview({ ...organization }))
	}, [organization])

	const styles = {
		page: { content: 'overview__page' },
		container: 'overview__container',
		chartsContainer: 'overview__charts-container'
	}

	return (
		<Page
			title={intl.overview.description}
			subtitle={intl.everthingInOnePlace.description}
			elementRef={ref}
			classes={styles.page}
		>
			<div className={styles.chartsContainer}>
				<Activity />
				<Interaction />
			</div>
			<div className={styles.container}>
				<InvitationsSent />
				<SignUps />
				<VideoVisits />
				<Chats />
			</div>

			<SectionContainer title={intl.topExperts.description}>
				<TopExperts onRefChange={setRef} />
			</SectionContainer>
		</Page>
	)
}

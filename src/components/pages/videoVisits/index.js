import { useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getAppointments, getMoreAppointments } from 'src/redux/actions'
import { Page } from 'src/components'
import { List } from './sections'
import { intl } from 'src/i18n'
import './styles.scss'

export const VideoVisits = ({ auth }) => {
	const dispatch = useDispatch()
	const { organizationId } = auth.details
	const [rendered, setRendered] = useState(0)

	const data = useSelector(state => state.appointments.data, shallowEqual)
	const lastDocument = useSelector(
		state => state.appointments.lastDocument,
		shallowEqual
	)
	const initialLoading = useSelector(state => state.appointments.get.loading)
	const loading = useSelector(state => state.appointments.more.loading)

	useEffect(() => {
		dispatch(getAppointments({ organizationId }))
	}, [])

	const handleLoad = (_, stopIndex) =>
		new Promise(resolve => {
			if (stopIndex >= rendered) {
				setRendered(stopIndex)

				if (!loading && lastDocument) {
					dispatch(getMoreAppointments({ organizationId, lastDocument }))
				}
				if (!loading) {
					resolve()
				}
			}
		})

	const styles = {
		page: { content: 'appointments__page-content' }
	}

	return (
		<Page
			classes={styles.page}
			title={intl.videoVisits.description}
			subtitle={intl.weAreAvailable.description}
		>
			<List
				organizationId={organizationId}
				data={data}
				loading={initialLoading}
				loadMoreItems={handleLoad}
				isItemLoaded={index => index < rendered}
			/>
		</Page>
	)
}

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAppointments, getMoreAppointments } from 'src/redux/actions'
import { Page } from 'src/components'
import { List } from './sections'
import { intl } from 'src/i18n'
import './styles.scss'

export const VideoVisits = () => {
	const dispatch = useDispatch()
	const [rendered, setRendered] = useState(0)

	const organizationId = useSelector(state => state.user.data.organizationId)
	const data = useSelector(state => state.appointments.data)
	const lastDocument = useSelector(state => state.appointments.lastDocument)
	const initialLoading = useSelector(state => state.appointments.get.loading)
	const loading = useSelector(state => state.appointments.more.loading)

	useEffect(() => {
		dispatch(getAppointments({ organizationId }))
	}, [organizationId])

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
				data={data}
				loading={initialLoading}
				loadMoreItems={handleLoad}
				isItemLoaded={index => index < rendered}
			/>
		</Page>
	)
}

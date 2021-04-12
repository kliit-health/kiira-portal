import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getQuestions, getMoreQuestions } from 'src/redux/actions'
import { Page } from 'src/components'
import { List } from './sections'
import { intl } from 'src/i18n'
import './styles.scss'

export const Chats = () => {
	const dispatch = useDispatch()
	const [rendered, setRendered] = useState(0)

	const organizationId = useSelector(state => state.user.data.organizationId)
	const data = useSelector(state => state.questions.data)
	const lastDocument = useSelector(state => state.questions.lastDocument)
	const initialLoading = useSelector(state => state.questions.get.loading)
	const loading = useSelector(state => state.questions.more.loading)

	useEffect(() => {
		dispatch(getQuestions({ organizationId }))
	}, [organizationId])

	const handleLoad = (_, stopIndex) =>
		new Promise(resolve => {
			if (stopIndex >= rendered) {
				setRendered(stopIndex)

				if (!loading && lastDocument) {
					dispatch(getMoreQuestions({ organizationId, lastDocument }))
				}
				if (!loading) {
					resolve()
				}
			}
		})

	const styles = {
		page: { content: 'chats__page-content' }
	}

	return (
		<Page
			classes={styles.page}
			title={intl.chats.description}
			subtitle={intl.weLikeToChat.description}
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

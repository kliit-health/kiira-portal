import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getQuestions, getMoreQuestions } from 'src/redux/actions'
import { Page } from 'src/components'
import { List } from './sections'
import { intl } from 'src/i18n'
import './styles.scss'

export const Questions = ({ auth }) => {
	const dispatch = useDispatch()
	const { organizationId } = auth.details
	const [rendered, setRendered] = useState(0)

	const data = useSelector(state => state.questions.data)
	const lastDocument = useSelector(state => state.questions.lastDocument)
	const initialLoading = useSelector(state => state.questions.get.loading)
	const loading = useSelector(state => state.questions.more.loading)

	useEffect(() => {
		if (!lastDocument) {
			dispatch(getQuestions({ organizationId }))
		}
	}, [])

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
		page: { content: 'questions__page-content' }
	}

	return (
		<Page
			classes={styles.page}
			title={intl.questions.description}
			subtitle={intl.weLikeToChat.description}
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

import { useState, useEffect } from 'react'
import { orderBy } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { getInactiveUsers, getMoreInactiveUsers } from 'src/redux/actions'
import {
	switchCase,
	formatPhoneNumber,
	downloadFile
} from 'src/helpers/functions'
import moment from 'moment'
import { Table, Dropdown } from 'src/components'
import { Footer } from './footer'
import { DATE, TEXT } from 'src/helpers/constants'
import model from './model'
import { Header } from './header'
import './styles.scss'

const { Column, DateCell, TextCell } = Table
const now = moment().format('l')

export const List = () => {
	const dispatch = useDispatch()

	const [rendered, setRendered] = useState(0)
	const [formatedData, setFormatedData] = useState([])

	const organizationId = useSelector(state => state.user.data.organizationId)
	const data = useSelector(state => state.inactiveUsers.data)
	const lastDocument = useSelector(state => state.inactiveUsers.lastDocument)
	const initialLoading = useSelector(state => state.inactiveUsers.get.loading)
	const loading = useSelector(state => state.inactiveUsers.more.loading)

	useEffect(() => {
		dispatch(getInactiveUsers({ organizationId }))
	}, [organizationId])

	const handleLoad = (_, stopIndex) =>
		new Promise(resolve => {
			if (stopIndex >= rendered) {
				setRendered(stopIndex)

				if (!loading && lastDocument) {
					dispatch(getMoreInactiveUsers({ organizationId, lastDocument }))
				}
				if (!loading) {
					resolve()
				}
			}
		})

	useEffect(() => {
		if (data) {
			setFormatedData(
				data.map(({ profileInfo, signUpDate, ...rest }) => ({
					...rest,
					...profileInfo,
					signUpDate: signUpDate.seconds,
					phoneNumber: formatPhoneNumber(profileInfo.phoneNumber)
				}))
			)
		}
	}, [data])

	const handleSort = (key, asc) => {
		let sortedData = orderBy(formatedData, key, asc ? 'asc' : 'desc')
		setFormatedData(sortedData)
	}

	const handleSelect = () => {
		downloadFile({
			url: `${process.env.BASE_URL}/downloadInactiveUsersReport`,
			data: { organizationId },
			fileName: `inactive-users-${now}.csv`
		})
	}

	const styles = {
		root: 'active-users-list',
		table: { list: 'active-users-list__list' }
	}

	return (
		<div className={styles.root}>
			<Table
				rowHeight={60}
				classes={styles.table}
				data={formatedData}
				loading={initialLoading}
				loadMoreItems={handleLoad}
				isItemLoaded={index => index < rendered}
			>
				<Header model={model.list} onSort={handleSort}>
					<Dropdown model={model.menu} generic onSelect={handleSelect} />
				</Header>
				{model.list.map(({ dataKey, style, type }, index) => (
					<Column style={style} key={`${index}-${dataKey}`}>
						{({ data }) => {
							const props = { data, dataKey }
							return switchCase({
								[TEXT]: <TextCell {...props} />,
								[DATE]: <DateCell {...props} />
							})(undefined)(type)
						}}
					</Column>
				))}
				<Footer userCount={formatedData.length} />
			</Table>
		</div>
	)
}

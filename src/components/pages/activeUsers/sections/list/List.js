import { useState, useEffect } from 'react'
import { orderBy } from 'lodash'
import { switchCase, filterObjectArray } from 'src/helpers/functions'
import { useFirebaseFetch } from 'src/hooks'
import { Table } from 'src/components'
import { Footer } from './footer'
import { DATE, TEXT, AVATAR } from 'src/helpers/constants'
import model from './model'
import { Header } from './header'
import './styles.scss'

const { Column, DateCell, TextCell, AvatarCell } = Table

export const List = ({ organizationId }) => {
	const [formatedData, setFormatedData] = useState([])
	const [searchData, setSearchData] = useState([])
	const [searching, setSearching] = useState(false)

	const queryConditions = [
		{ key: 'organizationId', operator: '==', value: organizationId },
		{ key: 'role', operator: '==', value: 'User' },
		{ key: 'firstLogin', operator: '==', value: false }
	]

	const { data, loading } = useFirebaseFetch('users', queryConditions)

	useEffect(() => {
		if (data) {
			setFormatedData(
				data.map(({ profileInfo, ...rest }) => {
					return {
						...profileInfo,
						...rest
					}
				})
			)
		}
	}, [data])

	const handleSort = (key, asc) => {
		let sortedData = orderBy(
			searching ? searchData : formatedData,
			key,
			asc ? 'asc' : 'desc'
		)
		searching ? setSearchData(sortedData) : setFormatedData(sortedData)
	}

	const handleSearch = value => {
		const isSearching = Boolean(value)
		const searchResult = filterObjectArray(formatedData, value)
		setSearching(isSearching)
		setSearchData(searchResult)
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
				data={searching ? searchData : formatedData}
				loading={loading}
			>
				<Header onSort={handleSort} onSearch={handleSearch} />
				{model.map(({ dataKey, style, type }, index) => (
					<Column style={style} key={`${index}-${dataKey}`}>
						{({ data }) => {
							const props = { data, dataKey }
							return switchCase({
								[TEXT]: <TextCell {...props} />,
								[DATE]: <DateCell {...props} />,
								[AVATAR]: <AvatarCell {...props} />
							})(undefined)(type)
						}}
					</Column>
				))}
				<Footer
					userCount={searching ? searchData.length : formatedData.length}
				/>
			</Table>
		</div>
	)
}

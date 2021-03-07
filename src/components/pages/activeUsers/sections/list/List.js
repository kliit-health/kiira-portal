import { useState, useEffect } from 'react'
import { orderBy } from 'lodash'
import {
	switchCase,
	filterObjectArray,
	formatPhoneNumber
} from 'src/helpers/functions'
import { Table } from 'src/components'
import { Footer } from './footer'
import { DATE, TEXT } from 'src/helpers/constants'
import model from './model'
import { Header } from './header'
import './styles.scss'

const { Column, DateCell, TextCell } = Table

export const List = ({ loading, data, loadMoreItems, isItemLoaded }) => {
	const [formatedData, setFormatedData] = useState([])
	const [searchData, setSearchData] = useState([])
	const [searching, setSearching] = useState(false)

	useEffect(() => {
		if (data) {
			setFormatedData(
				data.map(({ profileInfo, ...rest }) => {
					return {
						...rest,
						...profileInfo,
						phoneNumber: formatPhoneNumber(profileInfo.phoneNumber)
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
				loadMoreItems={loadMoreItems}
				isItemLoaded={isItemLoaded}
			>
				<Header onSort={handleSort} onSearch={handleSearch} />
				{model.map(({ dataKey, style, type }, index) => (
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
				<Footer
					userCount={searching ? searchData.length : formatedData.length}
				/>
			</Table>
		</div>
	)
}

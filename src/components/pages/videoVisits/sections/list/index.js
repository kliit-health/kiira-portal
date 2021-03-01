import { useState, useEffect } from 'react'
import { orderBy } from 'lodash'
import { switchCase } from 'src/helpers/functions'
import { Table } from 'src/components'
import { DATE, TEXT } from 'src/helpers/constants'
import model from './model'
import { Header } from './header'
import { Footer } from './footer'
import './styles.scss'

const { Column, DateCell, TextCell } = Table

export const List = ({ data, loading, loadMoreItems, isItemLoaded }) => {
	const [formatedData, setFormatedData] = useState([])

	useEffect(() => {
		setFormatedData(
			data.map(item => {
				const { expert, ...rest } = item
				return {
					expertName: `${expert.firstName} ${expert.lastName}`,
					...rest
				}
			})
		)
	}, [data, setFormatedData])

	const handleSort = (key, asc) => {
		let sortedData = orderBy(formatedData, key, asc ? 'asc' : 'desc')
		setFormatedData(sortedData)
	}

	const styles = {
		root: 'appointments-list',
		table: { list: 'appointments-list__list' }
	}

	return (
		<div className={styles.root}>
			<Table
				classes={styles.table}
				data={formatedData}
				loading={loading}
				loadMoreItems={loadMoreItems}
				isItemLoaded={isItemLoaded}
			>
				<Header onSort={handleSort} />
				{model.map(({ dataKey, style, type }, index) => (
					<Column style={style} key={`${index}-${dataKey}`}>
						{({ data }) => {
							const props = { data, dataKey }
							return switchCase({
								[TEXT]: <TextCell {...props} />,
								[DATE]: <DateCell calendar {...props} />
							})(undefined)(type)
						}}
					</Column>
				))}
				<Footer userCount={formatedData.length} />
			</Table>
		</div>
	)
}

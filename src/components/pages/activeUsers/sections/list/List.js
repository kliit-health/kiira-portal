import { useState, useEffect } from 'react'
import { switchCase } from 'src/helpers/functions'
import { useFirebaseFetch } from 'src/hooks'
import { Table } from 'src/components'
import { DATE, TEXT, AVATAR } from 'src/helpers/constants'
import model from './model'
import { Header } from './header'
import './styles.scss'

const { Column, DateCell, TextCell, AvatarCell } = Table

export const List = ({ organizationId }) => {
	const [formatedData, setFormatedData] = useState([])

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
				loading={loading}
			>
				<Header />
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
			</Table>
		</div>
	)
}

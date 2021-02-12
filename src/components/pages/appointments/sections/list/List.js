import { useRef, useState, useEffect } from 'react'
import { orderBy } from 'lodash'
import {
	switchCase,
	filterObjectArray,
	formatPhoneNumber
} from 'src/helpers/functions'
import { Table, Popover } from 'src/components'
import { Uploader } from '../uploader'
import { DATE, TEXT, POPOVER } from 'src/helpers/constants'
import model from './model'
import { Header } from './header'
import { Footer } from './footer'
import './styles.scss'

const { Column, DateCell, TextCell, PopoverCell } = Table

export const List = ({
	organizationId,
	data,
	loading,
	loadMoreItems,
	isItemLoaded
}) => {
	const popRef = useRef(null)
	const [anchorEl, setAnchorEl] = useState(null)
	const [formatedData, setFormatedData] = useState([])
	const [searchData, setSearchData] = useState([])
	const [searching, setSearching] = useState(false)

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
		let sortedData = orderBy(
			searching ? searchData : formatedData,
			key,
			asc ? 'asc' : 'desc'
		)
		searching ? setSearchData(sortedData) : setFormatedData(sortedData)
	}

	const handleAddUser = () => {
		setAnchorEl(popRef.current)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleSearch = value => {
		const isSearching = Boolean(value)
		const searchResult = filterObjectArray(formatedData, value)
		setSearching(isSearching)
		setSearchData(searchResult)
	}

	const popoverProps = {
		transformOrigin: {
			vertical: 'top',
			horizontal: 'right'
		},
		anchorOrigin: {
			vertical: 'bottom',
			horizontal: 'right'
		},
		anchorEl,
		onClose: handleClose
	}

	const styles = {
		root: 'invitations-list',
		table: { list: 'invitations-list__list' }
	}

	return (
		<div className={styles.root}>
			<Table
				classes={styles.table}
				data={searching ? searchData : formatedData}
				loading={loading}
				loadMoreItems={loadMoreItems}
				isItemLoaded={isItemLoaded}
			>
				<Header
					elementRef={popRef}
					onAddUsers={handleAddUser}
					onSort={handleSort}
					onSearch={handleSearch}
				/>
				{model.map(({ dataKey, style, type }, index) => (
					<Column style={style} key={`${index}-${dataKey}`}>
						{({ data }) => {
							const props = { data, dataKey }
							return switchCase({
								[TEXT]: <TextCell {...props} />,
								[DATE]: <DateCell calendar {...props} />,
								[POPOVER]: (
									<PopoverCell
										message={data.error && data.error.message}
										{...props}
									/>
								)
							})(undefined)(type)
						}}
					</Column>
				))}
				<Footer
					userCount={searching ? searchData.length : formatedData.length}
				/>
			</Table>
			<Popover {...popoverProps}>
				<Uploader onCancel={handleClose} organizationId={organizationId} />
			</Popover>
		</div>
	)
}

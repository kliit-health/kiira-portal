import { useRef, useState, useEffect } from 'react'
import { orderBy } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { getInvitations, getMoreInvitations } from 'src/redux/actions'
import { switchCase, formatPhoneNumber } from 'src/helpers/functions'
import { Table, Popover, Button } from 'src/components'
import { PlusIcon } from 'src/components/icons'
import { Uploader } from '../uploader'
import { DATE, TEXT, POPOVER } from 'src/helpers/constants'
import { intl } from 'src/i18n'
import { Header } from './header'
import { Footer } from './footer'
import model from './model'
import './styles.scss'

const { Column, DateCell, TextCell, PopoverCell } = Table

export const List = () => {
	const dispatch = useDispatch()
	const popRef = useRef(null)

	const [anchorEl, setAnchorEl] = useState(null)
	const [formatedData, setFormatedData] = useState([])
	const [rendered, setRendered] = useState(0)

	const organizationId = useSelector(state => state.user.data.organizationId)
	const data = useSelector(state => state.invitations.data)
	const lastDocument = useSelector(state => state.activeUsers.lastDocument)
	const loading = useSelector(state => state.activeUsers.get.loading)
	const initialLoading = useSelector(state => state.invitations.more.loading)

	useEffect(() => {
		dispatch(getInvitations({ organizationId }))
	}, [organizationId])

	const handleLoad = (_, stopIndex) =>
		new Promise(resolve => {
			if (stopIndex >= rendered) {
				setRendered(stopIndex)

				if (!loading && lastDocument) {
					dispatch(getMoreInvitations({ organizationId, lastDocument }))
				}
				if (!loading) {
					resolve()
				}
			}
		})

	useEffect(() => {
		setFormatedData(
			data.map(item => {
				const { profileInfo, ...rest } = item

				return {
					...profileInfo,
					...rest,
					phoneNumber: formatPhoneNumber(profileInfo.phoneNumber)
				}
			})
		)
	}, [data, setFormatedData])

	const handleSort = (key, asc) => {
		let sortedData = orderBy(formatedData, key, asc ? 'asc' : 'desc')
		setFormatedData(sortedData)
	}

	const handleAddUser = () => {
		setAnchorEl(popRef.current)
	}

	const handleClose = () => {
		setAnchorEl(null)
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
		table: { list: 'invitations-list__list' },
		button: {
			root: 'invitations-list__add-users-button'
		},
		icon: {
			root: 'invitations-list__plus-icon'
		}
	}

	return (
		<div className={styles.root}>
			<Table
				classes={styles.table}
				data={formatedData}
				loading={initialLoading}
				loadMoreItems={handleLoad}
				isItemLoaded={index => index < rendered}
			>
				<Header onSort={handleSort}>
					<Button
						classes={styles.button}
						elementRef={popRef}
						onClick={handleAddUser}
						link
					>
						<PlusIcon classes={styles.icon} />
						{intl.addUsers.description}
					</Button>
				</Header>
				{model.list.map(({ dataKey, style, type }, index) => (
					<Column style={style} key={`${index}-${dataKey}`}>
						{({ data }) =>
							switchCase({
								[TEXT]: <TextCell {...{ data, dataKey }} />,
								[DATE]: <DateCell calendar {...{ data, dataKey }} />,
								[POPOVER]: (
									<PopoverCell
										message={data.error && data.error.message}
										{...{ data, dataKey }}
									/>
								)
							})(undefined)(type)
						}
					</Column>
				))}
				<Footer userCount={formatedData.length} />
			</Table>
			<Popover {...popoverProps}>
				<Uploader onCancel={handleClose} />
			</Popover>
		</div>
	)
}

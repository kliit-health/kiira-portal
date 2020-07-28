import { useRef, useState, useEffect } from 'react'
import { switchCase } from 'src/helpers/functions'
import { Table, Popover } from 'src/components'
import { Uploader } from '../uploader'
import { DATE, TEXT } from 'src/helpers/constants'
import { firebaseFetch } from 'src/firebase'
import model from './model'
import { Header } from './header'
import './styles.scss'

const { Column, DateCell, TextCell } = Table

export const List = ({ organizationId }) => {
	const popRef = useRef(null)
	const [anchorEl, setAnchorEl] = useState(null)
	const [formatedData, setFormatedData] = useState([])
	const [loading, setLoading] = useState(false)

	const queryConditions = [
		{ key: 'organizationId', operator: '==', value: organizationId },
		{ key: 'role', operator: '==', value: 'User' }
	]

	const fetchUsers = async () => {
		setLoading(true)
		try {
			const data = await firebaseFetch('users', queryConditions)
			setFormatedData(
				data.map(item => {
					const { firstLogin, ...rest } = item
					return {
						signUp: firstLogin ? 'Pending' : 'Confirmed',
						...rest
					}
				})
			)
			setLoading(false)
		} catch {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchUsers()
	}, [])

	const handleAddUser = () => {
		setAnchorEl(popRef.current)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleSuccess = () => {
		fetchUsers()
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
			<Table classes={styles.table} data={formatedData} loading={loading}>
				<Header elementRef={popRef} onAddUsersClick={handleAddUser} />
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
			</Table>
			<Popover {...popoverProps}>
				<Uploader
					onSuccess={handleSuccess}
					onCancel={handleClose}
					organizationId={organizationId}
				/>
			</Popover>
		</div>
	)
}

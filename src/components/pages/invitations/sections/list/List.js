import { useRef, useState, useEffect } from 'react'
import { switchCase } from 'src/helpers/functions'
import { useFirebaseFetch } from 'src/hooks'
import { Table, Paper, Popover } from 'src/components'
import { Uploader } from '../uploader'
import { DATE, TEXT } from 'src/helpers/constants'
import model from './model'
import { Header } from './header'
import './styles.scss'

const { Column, DateCell, TextCell } = Table

export const List = ({ organizationId }) => {
	const popRef = useRef(null)
	const [anchorEl, setAnchorEl] = useState(null)
	const [formatedData, setFormatedData] = useState([])

	const queryConditions = [
		{ key: 'organizationId', operator: '==', value: organizationId },
		{ key: 'role', operator: '==', value: 'User' }
	]

	const { data } = useFirebaseFetch('users', queryConditions)

	useEffect(() => {
		if (data) {
			setFormatedData(
				data.map(item => {
					const { firstLogin, ...rest } = item
					return {
						signUp: firstLogin ? 'Pending' : 'Confirmed',
						...rest
					}
				})
			)
		}
	}, [data])

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
		table: { list: 'invitations-list__list' }
	}

	return (
		<div className={styles.root}>
			<Table classes={styles.table} data={formatedData}>
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
				<Uploader onCancel={handleClose} organizationId={organizationId} />
			</Popover>
		</div>
	)
}

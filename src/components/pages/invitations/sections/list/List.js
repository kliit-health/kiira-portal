import { useRef, useState } from 'react'
import { switchCase } from 'src/helpers/functions'
import { useFirebaseFetch } from 'src/hooks'
import { Table, Paper, Popover } from 'src/components'
import { Uploader } from '../uploader'
import {
	CREATED_AT,
	EMAIL,
	DISPLAY_NAME,
	SIGNED_UP_DATE
} from 'src/helpers/constants'
import { NameCell, EmailCell, CreatedAtCell, SignedUpCell } from './cells'
import model from './model'
import { Header } from './header'
import './styles.scss'

const { Column } = Table

export const List = ({ organizationId }) => {
	const popRef = useRef(null)
	const [anchorEl, setAnchorEl] = useState(null)

	const queryConditions = [
		{ key: 'organizationId', operator: '==', value: organizationId },
		{ key: 'role', operator: '==', value: 'User' }
	]

	const { data } = useFirebaseFetch('users', queryConditions)

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
		paper: { root: 'invitations-list__paper' },
		table: { list: 'invitations-list__list' }
	}

	return (
		<Paper classes={styles.paper}>
			<Table classes={styles.table} data={data || []}>
				<Header elementRef={popRef} onAddUsersClick={handleAddUser} />
				{model.map(({ dataKey, flex }, index) => (
					<Column style={{ flex }} key={`${index}-${dataKey}`}>
						{switchCase({
							[DISPLAY_NAME]: <NameCell />,
							[EMAIL]: <EmailCell />,
							[CREATED_AT]: <CreatedAtCell />,
							[SIGNED_UP_DATE]: <SignedUpCell />
						})(undefined)(dataKey)}
					</Column>
				))}
			</Table>
			<Popover {...popoverProps}>
				<Uploader onCancel={handleClose} organizationId={organizationId} />
			</Popover>
		</Paper>
	)
}

import { useRef, useState } from 'react'
import classnames from 'classnames'
import moment from 'moment'
import { switchCase } from 'helpers/functions'
import { useFirebaseFetch } from 'hooks'
import { PlusIcon } from 'components/icons'
import { Table, Paper, Popover, Typography, Button } from 'components'
import { Uploader } from '../uploader'
import {
	CREATED_AT,
	EMAIL,
	DISPLAY_NAME,
	SIGNED_UP_DATE
} from 'helpers/constants'
import model from './model'
import './styles.scss'

const { Column } = Table

const styles = {
	paper: { root: 'invitations-list__paper' },
	table: { list: 'invitations-list__list' }
}

export const List = ({ organizationId }) => {
	const conditions = [
		{ key: 'organizationId', operator: '==', value: organizationId },
		{ key: 'role', operator: '==', value: 'User' }
	]

	const { data, loading } = useFirebaseFetch('users', conditions)
	const popRef = useRef(null)
	const [anchorEl, setAnchorEl] = useState(null)

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

const Header = ({ onAddUsersClick, elementRef }) => {
	const styles = {
		header: 'invitatios-table-header',
		item: 'invitatios-table-header__item',
		title: { root: 'invitatios-table-header__title' },
		controls: 'invitatios-table-header__controls',
		container: 'invitatios-table-header__container',
		button: { root: 'invitatios-table-header__button' },
		icon: { root: 'invitatios-table-header__icon' }
	}

	return (
		<div className={styles.header}>
			<div className={styles.controls}>
				<Button
					elementRef={elementRef}
					onClick={onAddUsersClick}
					classes={styles.button}
					link
				>
					<PlusIcon classes={styles.icon} />
					Add Users
				</Button>
			</div>
			<div className={styles.container}>
				{model.map(({ dataKey, label, flex }) => (
					<div className={styles.item} key={dataKey} style={{ flex }}>
						<Typography classes={styles.title}>{label}</Typography>
					</div>
				))}
			</div>
		</div>
	)
}

Header.displayName = 'Header'

const CreatedAtCell = ({ data, classes = {} }) => {
	const styles = {
		details: { root: classnames('created-at-cell__details', classes.details) }
	}
	const formatDate = date => moment(date).calendar()
	const details = data[CREATED_AT]
	return <Typography classes={styles.details}>{formatDate(details)}</Typography>
}

const NameCell = ({ data, classes = {} }) => {
	const styles = {
		details: { root: classnames('name-cell__details', classes.details) }
	}
	const details = data[DISPLAY_NAME]
	return <Typography classes={styles.details}>{details}</Typography>
}

const EmailCell = ({ data, classes = {} }) => {
	const styles = {
		details: { root: classnames('email-cell__details', classes.details) }
	}
	const details = data[EMAIL]

	return <Typography classes={styles.details}>{details}</Typography>
}

const SignedUpCell = ({ data, classes = {} }) => {
	const styles = {
		details: { root: classnames('signed-up-cell__details', classes.details) }
	}
	const details = data[SIGNED_UP_DATE]

	const signedUp = moment(details, 'MMM Do YY').isValid()
		? moment(data).calendar()
		: 'Pending'

	return <Typography classes={styles.details}>{signedUp}</Typography>
}

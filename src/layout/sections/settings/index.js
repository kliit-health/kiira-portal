import { useRef, useState, Fragment } from 'react'
import { Popover, Avatar, Button } from 'src/components'
import { useSelector } from 'react-redux'
import { signOut } from 'src/firebase'
import { intl } from 'src/i18n'
import './styles.scss'

export const Settings = () => {
	const popRef = useRef(null)
	const [anchorEl, setAnchorEl] = useState(null)

	const {
		profileInfo: { firstName, lastName, profileImageUrl: imageUrl, email }
	} = useSelector(state => state.user.data)

	const handleSignOut = async () => {
		await signOut()
	}

	const handlePopover = () => {
		setAnchorEl(popRef.current)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const config = {
		anchorOrigin: {
			vertical: 'bottom',
			horizontal: 'right'
		},
		transformOrigin: {
			vertical: 'top',
			horizontal: 'right'
		}
	}

	const styles = {
		root: 'settings',
		name: 'settings__name',
		title: 'settings__title',
		dropdown: 'settings__dropdown',
		item: 'settings__dropdown-item',
		divider: 'settings__divider'
	}

	return (
		<Fragment>
			<div className={styles.root} onClick={handlePopover} ref={popRef}>
				<Avatar url={imageUrl} small />
			</div>
			<Popover anchorEl={anchorEl} onClose={handleClose} {...config}>
				<div className={styles.dropdown}>
					<div className={styles.item}>
						<Avatar url={imageUrl} />
						<p className={styles.name}>{`${firstName} ${lastName}`}</p>
						<p className={styles.title}>{email}</p>
					</div>
				</div>
				<div className={styles.divider}>
					<Button onClick={handleSignOut} link>
						{intl.signOut.description}
					</Button>
				</div>
			</Popover>
		</Fragment>
	)
}

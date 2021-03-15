import { Fragment, useRef, useState } from 'react'
import { Popover } from '../popover'
import classnames from 'classnames'
import MoreIcon from '@material-ui/icons/MoreVert'
import './styles.scss'

export const More = ({ model = [], classes = {}, onSelect }) => {
	const popRef = useRef(null)
	const [anchorEl, setAnchorEl] = useState(null)

	const handlePopover = () => {
		setAnchorEl(popRef.current)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleSelect = item => {
		onSelect(item)
		setAnchorEl(null)
	}

	const config = {
		anchorOrigin: {
			vertical: 'top',
			horizontal: 'right'
		},
		transformOrigin: {
			vertical: 'top',
			horizontal: 'right'
		}
	}

	const styles = {
		root: classnames('more', classes.root),
		icon: {
			root: 'more__icon'
		},
		menu: classnames('more__menu', classes.menu),
		item: classnames('more__menu-item', classes.item),
		title: classnames('more__menu-item-title', classes.title)
	}

	return (
		<Fragment>
			<div className={styles.root} onClick={handlePopover}>
				<MoreIcon classes={styles.icon} ref={popRef} />
			</div>
			<Popover anchorEl={anchorEl} onClose={handleClose} {...config}>
				<div className={styles.menu}>
					{model.map(({ name, id }) => (
						<div
							key={id}
							className={styles.item}
							onClick={() => handleSelect({ name, id })}
						>
							<span className={styles.title}>{name}</span>
						</div>
					))}
				</div>
			</Popover>
		</Fragment>
	)
}

import { useRef, useState } from 'react'
import { Popover } from 'src/components'
import classnames from 'classnames'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import './styles.scss'
import { Fragment } from 'react'

export const Selector = ({ title, data = [], onSelect, selected }) => {
	const popRef = useRef(null)
	const [anchorEl, setAnchorEl] = useState(null)

	const handlePopover = () => {
		setAnchorEl(popRef.current)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleSelect = uid => {
		onSelect(uid)
		setAnchorEl(null)
	}

	const config = {
		anchorOrigin: {
			vertical: 'top',
			horizontal: 'left'
		},
		transformOrigin: {
			vertical: 'top',
			horizontal: 'left'
		}
	}

	const styles = {
		root: 'selector',
		title: 'selector__title',
		icon: {
			root: 'selector__dropdown-icon'
		},
		dropdown: 'selector__dropdown',
		item: 'selector__dropdown-item',
		itemTitle: 'selector__item-title'
	}

	return (
		<Fragment>
			<div className={styles.root} onClick={handlePopover} ref={popRef}>
				<span className={styles.title}>{title}</span>
				<ArrowDropDownIcon classes={styles.icon} />
			</div>
			<Popover anchorEl={anchorEl} onClose={handleClose} {...config}>
				<div className={styles.dropdown}>
					{data.map(({ name, uid }) => (
						<div className={styles.item} onClick={() => handleSelect(uid)}>
							<span
								className={classnames(styles.itemTitle, {
									'selector__item-title--selected': name === title
								})}
							>
								{name}
							</span>
						</div>
					))}
				</div>
			</Popover>
		</Fragment>
	)
}

import { Fragment, useRef, useState, useEffect } from 'react'
import { Popover } from '../popover'
import classnames from 'classnames'
import MoreIcon from '@material-ui/icons/MoreVert'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import './styles.scss'

const defaultConfig = {
	anchorOrigin: {
		vertical: 'top',
		horizontal: 'right'
	},
	transformOrigin: {
		vertical: 'top',
		horizontal: 'right'
	}
}

export const Dropdown = ({
	model = [],
	classes = {},
	onSelect,
	config = defaultConfig,
	generic,
	selected = { name: '', id: '' }
}) => {
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

	const styles = {
		root: classnames('dropdown', classes.root),
		icon: {
			root: 'dropdown__icon'
		},
		title: classnames('dropdown__title', classes.title),
		titleContainer: classnames(
			'dropdown__title-container',
			classes.titleContainer
		),
		menu: classnames('dropdown__menu', classes.menu),
		item: classnames('dropdown__menu-item', classes.item),
		itemText: classnames('dropdown__menu-item-title', classes.itemText)
	}

	return (
		<Fragment>
			<div className={styles.root} onClick={handlePopover}>
				{generic ? (
					<MoreIcon classes={styles.icon} ref={popRef} />
				) : (
					<div className={styles.titleContainer} ref={popRef}>
						<span className={styles.title}>{selected.name}</span>
						<ArrowDropDownIcon classes={styles.icon} />
					</div>
				)}
			</div>
			<Popover anchorEl={anchorEl} onClose={handleClose} {...config}>
				<div className={styles.menu}>
					{model.map(({ name, id }, index) => (
						<div
							key={id}
							className={styles.item}
							onClick={() => handleSelect({ name, id, index })}
						>
							<span className={styles.itemText}>{name}</span>
						</div>
					))}
				</div>
			</Popover>
		</Fragment>
	)
}

Dropdown.displayName = 'Dropdown'

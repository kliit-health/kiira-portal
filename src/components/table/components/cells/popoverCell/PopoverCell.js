import classnames from 'classnames'
import { Fragment, useRef, useState } from 'react'
import { Typography, Button, Popover } from 'src/components'
import './styles.scss'

export const PopoverCell = ({ data, dataKey, message, classes = {} }) => {
	const [anchorEl, setAnchorEl] = useState(null)
	const popRef = useRef(null)

	const handleClick = () => {
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
		root: classnames('popover-cell', classes.root),
		details: {
			root: classnames('popover-cell__details', classes.details)
		}
	}

	return (
		<div className={styles.root}>
			{message ? (
				<Button elementRef={popRef} underlined error onClick={handleClick} link>
					{data[dataKey]}
				</Button>
			) : (
				<Typography classes={styles.details}>{data[dataKey]}</Typography>
			)}
			<Popover {...popoverProps}>
				<div style={{ margin: 20 }}>
					<Typography error>{message}</Typography>
				</div>
			</Popover>
		</div>
	)
}

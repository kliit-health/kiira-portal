import { Popover as MaterialPopover } from '@material-ui/core'
import classnames from 'classnames'
import './styles.scss'

export const Popover = props => {
	const {
		children,
		onClose,
		anchorEl,
		transformOrigin = {
			vertical: 'center',
			horizontal: 'center'
		},
		anchorOrigin = {
			vertical: 'center',
			horizontal: 'center'
		},
		classes = {}
	} = props
	const styles = {
		popover: { paper: classnames('popover', classes.root) }
	}

	return (
		<MaterialPopover
			open={!!anchorEl}
			anchorEl={anchorEl}
			onClose={onClose}
			anchorOrigin={anchorOrigin}
			transformOrigin={transformOrigin}
			classes={styles.popover}
		>
			{children}
		</MaterialPopover>
	)
}

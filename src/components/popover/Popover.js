import { Popover as MaterialPopover } from '@material-ui/core'
import './styles.scss'

export const Popover = ({ children, onClose, anchorEl }) => {
	const styles = {
		paper: { paper: 'popover__paper' }
	}
	const transformOrigin = {
		vertical: 'center',
		horizontal: 'center'
	}

	const anchorOrigin = {
		vertical: 'center',
		horizontal: 'center'
	}

	return (
		<MaterialPopover
			open={!!anchorEl}
			anchorEl={anchorEl}
			onClose={onClose}
			anchorOrigin={anchorOrigin}
			transformOrigin={transformOrigin}
			classes={styles.paper}
		>
			{children}
		</MaterialPopover>
	)
}

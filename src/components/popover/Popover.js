import { Popover as MaterialPopover } from '@material-ui/core'

export const Popover = ({ children, onClose, anchorEl }) => {
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
		>
			{children}
		</MaterialPopover>
	)
}

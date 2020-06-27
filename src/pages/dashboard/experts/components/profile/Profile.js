import { Popover } from '@material-ui/core'
import './styles.scss'

export const Profile = ({ anchorEl, onClose }) => {
	return (
		<Popover
			open={!!anchorEl}
			anchorEl={anchorEl}
			onClose={onClose}
			anchorOrigin={{
				vertical: 'center',
				horizontal: 'center'
			}}
			transformOrigin={{
				vertical: 'center',
				horizontal: 'center'
			}}
		>
			<div className="expert-profile"></div>
		</Popover>
	)
}

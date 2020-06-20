import { IconButton } from '@material-ui/core'
import './styles.scss'

export const FloatingButton = ({ children, onClick }) => (
	<div className="floating-button">
		<IconButton classes={{ root: 'floating-button__root' }} onClick={onClick}>
			{children}
		</IconButton>
	</div>
)

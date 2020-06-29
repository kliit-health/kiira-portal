import { Divider } from 'components'
import classnames from 'classnames'
import './styles.scss'

export const Footer = ({ children, classes = {}, divider }) => (
	<div className={classnames('card-footer', classes.root)}>
		{divider && <Divider />}
		{children}
	</div>
)

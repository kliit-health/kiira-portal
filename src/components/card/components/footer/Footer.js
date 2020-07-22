import { Divider } from 'src/components'
import { FOOTER } from 'src/helpers/constants'
import classnames from 'classnames'
import './styles.scss'

const Footer = ({ children, classes = {}, divider }) => (
	<div className={classnames('card-footer', classes.root)}>
		{divider && <Divider />}
		{children}
	</div>
)

Footer.displayName = FOOTER

export default Footer

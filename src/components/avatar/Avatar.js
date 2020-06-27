import classnames from 'classnames'
import './styles.scss'

export const Avatar = ({ classes = {}, url = '/assets/avatar.png' }) => (
	<img className={classnames('avatar', classes.root)} src={url} />
)

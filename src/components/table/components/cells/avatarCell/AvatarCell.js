import classnames from 'classnames'
import { Avatar } from 'src/components'
import './styles.scss'

export const AvatarCell = ({ data, dataKey, classes = {} }) => {
	const src = data[dataKey] || ''
	const styles = {
		root: classnames('avatar-cell', classes.root),
		avatar: { root: classnames('avatar-cell__avatar', classes.avatar) }
	}

	return (
		<div className={styles.root}>
			<Avatar small classes={styles.avatar} src={src} />
		</div>
	)
}

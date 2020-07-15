import { Typography } from 'src/components'
import classnames from 'classnames'
import './styles.scss'

export const Avatar = ({
	classes = {},
	url = '/assets/avatar.svg',
	small,
	large,
	status
}) => {
	const sizes = {
		'avatar--small': small,
		'avatar--large': large
	}

	const modifiers = {
		'avatar--border': url === '/assets/avatar.svg'
	}

	const styles = {
		avatar: classnames('avatar', classes.root, { ...sizes, ...modifiers }),
		image: classnames('avatar__image', classes.image),
		label: classnames('avatar__label', classes.label),
		font: { root: classnames('avatar__label-text', classes.labelText) }
	}

	return (
		<div className={styles.avatar}>
			<img className={styles.image} src={url} />
			{status && (
				<div className={styles.label}>
					<Typography light white classes={styles.font}>
						online
					</Typography>
				</div>
			)}
		</div>
	)
}

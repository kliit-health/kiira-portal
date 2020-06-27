import { Typography } from 'components'
import classnames from 'classnames'
import './styles.scss'

export const Avatar = ({
	classes = {},
	url = '/assets/avatar.png',
	border,
	small,
	medium,
	large,
	status
}) => {
	const sizes = {
		'avatar--small': small,
		'avatar--medium': medium,
		'avatar--large': large
	}

	const modifiers = {
		'avatar--border': border
	}

	return (
		<div
			className={classnames('avatar', classes.root, { ...sizes, ...modifiers })}
		>
			<img className={classnames('avatar__image', classes.image)} src={url} />
			{status && (
				<div className={classnames('avatar__label', classes.label)}>
					<Typography
						light
						white
						classes={{
							root: classnames('avatar__label-text', classes.labelText)
						}}
					>
						{status}
					</Typography>
				</div>
			)}
		</div>
	)
}

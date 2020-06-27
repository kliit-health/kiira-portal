import React from 'react'
import { Typography, Avatar } from 'components'
import classnames from 'classnames'
import './styles.scss'

export const Header = ({
	title,
	subtitle,
	avatarUrl,
	divider,
	children,
	classes = {}
}) => (
	<div className={classnames('card-header', classes.root)}>
		<div className="card-header__container">
			{avatarUrl && (
				<Avatar
					medium
					url={avatarUrl}
					classes={{ root: 'card-header__avatar' }}
				/>
			)}
			<div className="card-header__details">
				<Typography h6 black>
					{title}
				</Typography>
				<Typography h7 charcoal light>
					{subtitle}
				</Typography>
			</div>
			{children}
		</div>
		{divider && (
			<div className={classnames('card-header__divider', classes.divider)} />
		)}
	</div>
)

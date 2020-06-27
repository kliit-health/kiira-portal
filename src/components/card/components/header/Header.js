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
					classes={{
						root: classnames('card-header__avatar', classes.avatar)
					}}
					url={avatarUrl}
				/>
			)}
			<div className="card-header__details">
				<Typography h6 charcoal>
					{title}
				</Typography>
				<Typography h7 gray light>
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

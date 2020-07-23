import React from 'react'
import { Typography, Avatar } from 'src/components'
import { HEADER } from 'src/helpers/constants'
import classnames from 'classnames'
import './styles.scss'

const Header = props => {
	const { title, subtitle, avatarUrl, children, status, classes = {} } = props

	const styles = {
		header: classnames('card-header', classes.root),
		container: 'card-header__container',
		avatar: { root: 'card-header__avatar' },
		details: 'card-header__details'
	}
	return (
		<div className={styles.header}>
			<div className={styles.container}>
				{avatarUrl && (
					<Avatar status={status} url={avatarUrl} classes={styles.avatar} />
				)}
				<div className={styles.details}>
					<Typography h6 black>
						{title}
					</Typography>
					<Typography h7 charcoal light>
						{subtitle}
					</Typography>
				</div>
				{children}
			</div>
		</div>
	)
}

Header.displayName = HEADER

export default Header

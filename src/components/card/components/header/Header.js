import React from 'react'
import { Typography, Avatar, Divider } from 'src/components'
import { HEADER } from 'src/helpers/constants'
import classnames from 'classnames'
import './styles.scss'

const Header = props => {
	const { title, subtitle, avatarUrl, children, status, classes = {} } = props

	const styles = {
		header: classnames('card-header', classes.root),
		container: 'card-header__container',
		avatar: { root: 'card-header__avatar' },
		details: 'card-header__details',
		divider: { root: 'card-header__divider' }
	}
	return (
		<div className={styles.header}>
			<div className={styles.container}>
				<Avatar status={status} url={avatarUrl} classes={styles.avatar} />
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
			<Divider classes={styles.divider} />
		</div>
	)
}

Header.displayName = HEADER

export default Header

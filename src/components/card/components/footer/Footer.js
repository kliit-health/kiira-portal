import React from 'react'
import classnames from 'classnames'
import './styles.scss'

export const Footer = ({ children, classes = {}, divider }) => (
	<div className={classnames('card-footer', classes.root)}>
		{divider && (
			<div className={classnames('card-footer__divider', classes.divider)} />
		)}
		{children}
	</div>
)

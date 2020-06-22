import React from 'react'
import { Avatar } from '@material-ui/core'
import './styles.scss'

export const ProfileCard = ({ firstName, lastName, email }) => (
	<div className="profile-card">
		<Avatar className="profile-card__avatar" variant="rounded" />
		<div className="profile-card__details">
			<span className="profile-card__name">{`${firstName} ${lastName}`}</span>
			<span className="profile-card__email">{email}</span>
		</div>
	</div>
)

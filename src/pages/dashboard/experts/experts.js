import { useState, useRef } from 'react'
import { useFirebaseSimpleFetch } from 'hooks'
import { Card, Typography, Page } from 'components'
import { calculateRating } from 'helpers/functions'
import { Profile } from './profile'
import './styles.scss'

const { Header, Rating } = Card

export const Experts = () => {
	const popRef = useRef(null)
	const [anchorEl, setAnchorEl] = useState(null)
	const [profileData, setProfileData] = useState(null)

	const handleClick = item => {
		setAnchorEl(popRef.current)
		setProfileData(item)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const { data } = useFirebaseSimpleFetch('users', ['role', '==', 'Expert'])

	return (
		<Page elementRef={popRef}>
			<div className="experts__items">
				{data &&
					data.map(item => {
						const { uid, rating, profileInfo, isOnline } = item
						const {
							bio,
							firstName,
							lastName,
							profileImageUrl,
							profession
						} = profileInfo
						const { fullName } = profession
						return (
							<Card key={uid} onClick={() => handleClick(item)}>
								<Header
									divider
									avatarUrl={profileImageUrl}
									title={`${firstName} ${lastName}`}
									subtitle={fullName}
									status={isOnline}
								>
									<Rating value={calculateRating(rating)} />
								</Header>
								<Typography>{bio}</Typography>
							</Card>
						)
					})}
			</div>
			{profileData && (
				<Profile onClose={handleClose} anchorEl={anchorEl} data={profileData} />
			)}
		</Page>
	)
}

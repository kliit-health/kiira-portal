import { useState, useRef } from 'react'
import { useFirebaseSimpleFetch } from 'hooks'
import { Container, Card, Typography } from 'components'
import { Section, Profile } from './components'
import { calculateRating } from 'helpers/functions'
import './styles.scss'

const { Header, Footer, Rating } = Card

export const Experts = () => {
	const popRef = useRef(null)
	const [anchorEl, setAnchorEl] = useState(null)

	const handleClick = () => {
		setAnchorEl(popRef.current)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const { data } = useFirebaseSimpleFetch('users', ['role', '==', 'Expert'])

	return (
		<Container>
			<Section popRef={popRef}>
				{data &&
					data.map(item => {
						const { uid, rating, profileInfo } = item
						const {
							bio,
							firstName,
							lastName,
							profileImageUrl,
							profession
						} = profileInfo
						const { fullName } = profession

						return (
							<Card onClick={handleClick}>
								<Header
									divider
									avatarUrl={profileImageUrl}
									title={`${firstName} ${lastName}`}
									subtitle={fullName}
								>
									<Rating value={calculateRating(rating)} />
								</Header>
								<Typography>{bio}</Typography>
							</Card>
						)
					})}
			</Section>
			<Profile onClose={handleClose} anchorEl={anchorEl} />
		</Container>
	)
}

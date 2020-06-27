import { useFirebaseSimpleFetch } from 'hooks'
import { intl } from 'i18n'
import { Container, Card, Typography } from 'components'
import { calculateRating } from 'helpers/functions'
import { Section } from './components'

const { Header, Footer, Rating } = Card

export const Overview = () => {
	const { data } = useFirebaseSimpleFetch('users', ['role', '==', 'Expert'], 4)
	return (
		<Container>
			<Section title={intl.topExperts.description}>
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
							<Card>
								<Header
									avatarUrl={profileImageUrl}
									title={`${firstName} ${lastName}`}
									subtitle={fullName}
								>
									<Rating value={calculateRating(rating)} />
								</Header>
								<Footer divider>
									<Typography>{bio}</Typography>
								</Footer>
							</Card>
						)
					})}
			</Section>
		</Container>
	)
}

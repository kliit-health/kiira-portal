import { useFirebaseSimpleFetch } from 'hooks'
import { intl } from 'i18n'
import { Container } from 'components'
import { Section, Card } from './components'

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
							<Card
								key={uid}
								uid={uid}
								firstName={firstName}
								lastName={lastName}
								avatarUrl={profileImageUrl}
								rating={rating}
								profession={fullName}
								bio={bio}
							/>
						)
					})}
			</Section>
		</Container>
	)
}

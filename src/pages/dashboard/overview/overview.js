import { useFirebaseFetch } from 'hooks'
import { intl } from 'i18n'
import { Container } from 'components'
import { Section, Card } from './components'

export const Overview = () => {
	const { data, loading } = useFirebaseFetch('users', ['role', '==', 'Expert'])
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

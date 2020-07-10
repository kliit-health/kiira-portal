import { useFirebaseFetch } from 'hooks'
import { Card, Typography } from 'components'
import { calculateRating } from 'helpers/functions'
import './styles.scss'

const { Header, Rating } = Card

export const List = ({ onClick, limit = 100 }) => {
	const conditions = [{ key: 'role', operator: '==', value: 'Expert' }]
	const { data } = useFirebaseFetch('users', conditions, limit)
	const styles = { list: 'experts-list' }

	return (
		<div className={styles.list}>
			{data &&
				data.map(item => {
					const { uid, rating, profileInfo, isOnline } = item
					return (
						<Card key={uid} onClick={() => onClick(item)}>
							<Header
								divider
								avatarUrl={profileInfo.profileImageUrl}
								title={`${profileInfo.firstName} ${profileInfo.lastName}`}
								subtitle={profileInfo.profession.fullName}
								status={isOnline}
							>
								<Rating value={calculateRating(rating)} />
							</Header>
							<Typography>{profileInfo.bio}</Typography>
						</Card>
					)
				})}
		</div>
	)
}

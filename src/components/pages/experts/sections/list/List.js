import { useFirebaseFetch } from 'src/hooks'
import { Card, Typography, CircularProgress } from 'src/components'
import { calculateRating } from 'src/helpers/functions'
import './styles.scss'

const { Header, Rating } = Card

export const List = ({ onClick, limit = 100 }) => {
	const conditions = [{ key: 'role', operator: '==', value: 'Expert' }]
	const { data, loading } = useFirebaseFetch('users', conditions, limit)
	const styles = {
		root: 'experts-list',
		list: 'experts-list__element',
		footer: 'experts-list__footer'
	}

	return (
		<div className={styles.root}>
			{loading ? (
				<CircularProgress />
			) : (
				<div className={styles.list}>
					{data.map(item => {
						const { uid, rating, profileInfo, isOnline } = item
						return (
							<Card gradient key={uid} onClick={() => onClick(item)}>
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
			)}
			<div className={styles.footer}></div>
		</div>
	)
}

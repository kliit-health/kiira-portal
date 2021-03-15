import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getExperts } from 'src/redux/actions'
import { Card, Typography, CircularProgress } from 'src/components'
import { calculateRating } from 'src/helpers/functions'
import './styles.scss'
const { Header, Rating } = Card

export const List = ({ onClick, limit }) => {
	const dispatch = useDispatch()

	const data = useSelector(state => state.experts.data)
	const loading = useSelector(state => state.experts.loading)

	useEffect(() => {
		dispatch(getExperts({ limit }))
	}, [])

	const styles = {
		root: 'experts-list',
		list: 'experts-list__element',
		footer: 'experts-list__footer'
	}

	return (
		<div className={styles.root}>
			{loading & !data.length ? (
				<CircularProgress />
			) : (
				<div>
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
					<div className={styles.footer} />
				</div>
			)}
		</div>
	)
}

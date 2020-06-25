import { Avatar, Divider } from '@material-ui/core'
import { Typography, Link } from 'components'
import './styles.scss'

export const Card = ({
	firstName,
	lastName,
	avatarUrl,
	profession,
	rating,
	bio,
	uid
}) => {
	const caculateRating = rating => {
		return rating / 2
	}

	return (
		<div className="overview-card">
			<Avatar src={avatarUrl} className="overview-card__avatar" />
			<div className="overview-card__content">
				<div className="overview-card__header">
					<div className="overview-card__details">
						<Typography h3 tertiary>{`${firstName} ${lastName}`}</Typography>
						<Typography quartenary>{profession}</Typography>
					</div>
					<div className="overview-card__rating">
						<img className="overview-card__star-image" src="/assets/star.svg" />
						<Typography tertiary body>
							{caculateRating(rating)}
						</Typography>
					</div>
				</div>
				<div className="overview-card__body"></div>
				<Divider variant="middle" />
				<div className="overview-card__footer">
					<Typography className="overview-card__bio-text">{bio}</Typography>
					<div className="overview-card__gradient" />
				</div>
				<Link
					className="overview-card__link"
					name="See More"
					as={`/dashboard/experts/${uid}`}
					href="/dashboard/experts/[uid]"
				/>
			</div>
		</div>
	)
}

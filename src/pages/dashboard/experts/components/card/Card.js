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
		<div className="experts-card">
			<Avatar src={avatarUrl} className="experts-card__avatar" />
			<div className="experts-card__content">
				<div className="experts-card__header">
					<div className="experts-card__details">
						<Typography h3 tertiary>{`${firstName} ${lastName}`}</Typography>
						<Typography quartenary>{profession}</Typography>
					</div>
					<div className="experts-card__rating">
						<img className="experts-card__star-image" src="/assets/star.svg" />
						<Typography tertiary body>
							{caculateRating(rating)}
						</Typography>
					</div>
				</div>
				<div className="experts-card__body"></div>
				<Divider variant="middle" />
				<div className="experts-card__footer">
					<Typography className="experts-card__bio-text">{bio}</Typography>
					<div className="experts-card__gradient" />
				</div>
				<span className="experts-card__see-more">
					<Typography primary>See more</Typography>
				</span>
			</div>
		</div>
	)
}

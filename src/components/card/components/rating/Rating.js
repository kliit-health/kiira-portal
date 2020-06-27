import { Typography } from 'components'
import classnames from 'classnames'
import './styles.scss'

export const Rating = ({ value = 0, classes = {} }) => (
	<div className={classnames('card-rating', classes.image)}>
		<img
			className={classnames('card-rating__image', classes.image)}
			src="/assets/star.png"
		/>
		<Typography tertiary>{value}</Typography>
	</div>
)

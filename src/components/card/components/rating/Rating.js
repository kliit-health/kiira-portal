import { Typography } from 'components'
import classnames from 'classnames'
import './styles.scss'

export const Rating = ({ value = 0, classes = {} }) => (
	<div className={classnames('card-rating', classes.root)}>
		<img
			className={classnames('card-rating__image', classes.image)}
			src="/assets/star.png"
		/>
		<Typography
			classes={{ root: classnames('card-rating__value', classes.value) }}
		>
			{value}
		</Typography>
	</div>
)

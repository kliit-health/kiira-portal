import { Typography } from 'components'
import classnames from 'classnames'
import './styles.scss'

export const Rating = ({ value = 0, classes = {} }) => {
	const styles = {
		rating: classnames('card-rating', classes.root),
		image: classnames('card-rating__image', classes.image),
		font: { root: classnames('card-rating__value', classes.value) }
	}

	return (
		<div className={styles.rating}>
			<img className={styles.image} src="/assets/star.png" />
			<Typography classes={styles.font}>{value}</Typography>
		</div>
	)
}

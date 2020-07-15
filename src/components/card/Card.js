import { Header, Footer, Rating } from './components'
import classnames from 'classnames'
import './styles.scss'

export const Card = ({ classes = {}, children, onClick, gradient }) => {
	const styles = {
		root: classnames('card', classes.root),
		gradient: classnames('card__gradient', classes.gradient, {
			'card__gradient--visible': gradient
		})
	}

	return (
		<div onClick={onClick} className={styles.root}>
			{children}
			<div className={styles.gradient} />
		</div>
	)
}

Card.Header = Header
Card.Footer = Footer
Card.Rating = Rating

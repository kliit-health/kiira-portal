import { Header, Footer, Rating } from './components'
import { cloneChildren, cloneChild } from 'src/helpers/functions'
import { FOOTER, HEADER } from 'src/helpers/constants'
import { Divider } from 'src/components'
import classnames from 'classnames'
import './styles.scss'

export const Card = ({ classes = {}, children, onClick, gradient }) => {
	const styles = {
		root: classnames('card', classes.root),
		container: classnames('card__header-container', classes.container),
		background: 'card__header-background',
		content: classnames('card__content', classes.content),
		gradient: classnames('card__gradient', classes.gradient, {
			'card__gradient--visible': gradient
		}),
		divider: { root: 'card__divider' }
	}

	return (
		<div onClick={onClick} className={styles.root}>
			<div className={styles.container}>
				{cloneChild(children, HEADER)}
				<div className={styles.background} />
			</div>
			<div className={styles.content}>
				{cloneChildren(children, [HEADER])}
				<div className={styles.gradient} />
			</div>
		</div>
	)
}

Card.Header = Header
Card.Footer = Footer
Card.Rating = Rating

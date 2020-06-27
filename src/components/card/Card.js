import { Header, Footer, Rating } from './components'
import classnames from 'classnames'
import './styles.scss'

export const Card = ({ classes = {}, children, onClick }) => (
	<div onClick={onClick} className={classnames('card', classes.root)}>
		{children}
	</div>
)

Card.Header = Header
Card.Footer = Footer
Card.Rating = Rating

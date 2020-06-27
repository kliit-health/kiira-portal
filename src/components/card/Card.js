import { Header, Footer, Rating } from './components'
import classnames from 'classnames'
import './styles.scss'

export const Card = ({ className, children, onClick }) => (
	<div onClick={onClick} className={classnames('card', className)}>
		{children}
	</div>
)

Card.Header = Header
Card.Footer = Footer
Card.Rating = Rating

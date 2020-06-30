import classnames from 'classnames'
import { Container } from 'components'
import './styles.scss'

export const Page = ({ elementRef, children, classes = {} }) => (
	<Container>
		<div ref={elementRef} className={classnames('page', classes.root)}>
			{children}
		</div>
	</Container>
)

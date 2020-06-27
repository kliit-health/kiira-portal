import classnames from 'classnames'
import './styles.scss'

export const Container = ({ children, classes = {} }) => (
	<div className={classnames('container', classes.root)}>
		<div className={classnames('container__constrains', classes.constraints)}>
			{children}
		</div>
	</div>
)

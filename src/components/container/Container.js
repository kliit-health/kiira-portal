import classnames from 'classnames'
import './styles.scss'

export const Container = ({ children, className }) => (
	<div className="container">
		<div className={classnames('container__constrains', className & className)}>
			{children}
		</div>
	</div>
)

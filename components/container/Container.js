import classnames from 'classnames'
import './styles.scss'

export const Container = ({ children, classes = {} }) => {
	const styles = {
		container: classnames('container', classes.root),
		constraints: classnames('container__constrains', classes.constraints)
	}

	return (
		<div className={styles.container}>
			<div className={styles.constraints}>{children}</div>
		</div>
	)
}

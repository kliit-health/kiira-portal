import classnames from 'classnames'
import './styles.scss'

export const Container = ({ children, classes = {}, elementRef }) => {
	const styles = {
		container: classnames('container', classes.root),
		constraints: classnames('container__constrains', classes.constraints)
	}

	return (
		<div className={styles.container}>
			<div ref={elementRef} className={styles.constraints}>
				{children}
			</div>
		</div>
	)
}

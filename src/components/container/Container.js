import classnames from 'classnames'
import './styles.scss'

export const Container = ({ children, classes = {}, elementRef }) => {
	const styles = {
		container: classnames('container', classes.root),
		constraints: classnames('container__constrains', classes.constraints),
		anchor: 'container__anchor'
	}

	return (
		<div className={styles.container}>
			<div className={styles.constraints}>{children}</div>
			<div className={styles.anchor} ref={elementRef} />
		</div>
	)
}

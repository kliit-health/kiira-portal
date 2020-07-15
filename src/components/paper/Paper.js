import classnames from 'classnames'
import './styles.scss'

export const Paper = ({ classes = {}, children, elementRef }) => {
	const styles = {
		paper: classnames('paper', classes.root)
	}
	return (
		<div ref={elementRef} className={styles.paper}>
			{children}
		</div>
	)
}

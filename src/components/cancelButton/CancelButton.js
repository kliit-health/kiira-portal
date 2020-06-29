import classnames from 'classnames'
import './styles.scss'

export const CancelButton = ({ onCancel, classes = {} }) => {
	const styles = {
		button: classnames('cancel-button', classes.root),
		image: classnames('cancel-button__image', classes.image)
	}
	return (
		<div className={styles.button} onClick={onCancel}>
			<img className={styles.image} src="/assets/cancel.png" />
		</div>
	)
}

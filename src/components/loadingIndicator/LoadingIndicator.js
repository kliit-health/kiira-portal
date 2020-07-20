import classnames from 'classnames'
import './styles.scss'

export const LoadingIndicator = ({ classes = {}, children }) => {
	const styles = {
		indicator: classnames('loading-indicator', classes.root),
		animation: classnames('loading-indicator__animation', classes.animation),
		image: classnames('loading-indicator__image', classes.image)
	}

	return (
		<div className={styles.indicator}>
			<div className={styles.animation}>
				{children}
				<img className={styles.image} src="/assets/penguin.svg" />
			</div>
		</div>
	)
}

import classnames from 'classnames'
import './styles.scss'

export const LoadingIndicator = ({ classes = {} }) => (
	<div className={classnames('loading-indicator', classes.root)}>
		<div
			className={classnames('loading-indicator__animation', classes.animation)}
		>
			<img
				className={classnames('loading-indicator__image ', classes.image)}
				src="/assets/bird.png"
			/>
		</div>
	</div>
)

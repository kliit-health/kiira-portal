import classnames from 'classnames'
import { Typography } from 'src/components'
import './styles.scss'

export const Item = props => {
	const { title, onClick, isOpened } = props

	const styles = {
		item: classnames('sidebar-section-item', {
			'sidebar-section-item--active': isOpened
		}),
		title: 'sidebar-section-item__title'
	}

	const handleClick = () => {
		if (onClick) {
			onClick(props)
		}
	}

	return (
		<div className={styles.item} onClick={handleClick}>
			<Typography h7 white className={styles.title}>
				{title}
			</Typography>
		</div>
	)
}

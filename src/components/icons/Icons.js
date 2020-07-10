import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import classnames from 'classnames'
import './styles.scss'

export const PlusIcon = ({ classes = {} }) => {
	const styles = {
		icon: classnames('plus-icon', classes.root),
		element: classnames('plus-icon__element', classes.element)
	}

	return (
		<div className={styles.icon}>
			<FontAwesomeIcon className={styles.element} icon={faPlus} />
		</div>
	)
}

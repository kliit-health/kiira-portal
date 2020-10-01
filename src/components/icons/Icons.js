import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faPlus,
	faChevronDown,
	faSearch
} from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
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

export const ChevronIcon = ({ classes = {} }) => {
	const styles = {
		icon: classnames('chevron-icon', classes.root),
		element: classnames('chevron-icon__element', classes.element)
	}

	return (
		<div className={styles.icon}>
			<FontAwesomeIcon className={styles.element} icon={faChevronDown} />
		</div>
	)
}

export const SearchIcon = ({ classes = {} }) => {
	const styles = {
		icon: classnames('search-icon', classes.root),
		element: classnames('search-icon__element', classes.element)
	}

	return (
		<div className={styles.icon}>
			<FontAwesomeIcon className={styles.element} icon={faSearch} />
		</div>
	)
}

export const CancelCircle = ({ classes = {} }) => {
	const styles = {
		icon: classnames('cancel-circle-icon', classes.root),
		element: classnames('cancel-circle__element', classes.element)
	}

	return (
		<div className={styles.icon}>
			<FontAwesomeIcon className={styles.element} icon={faTimesCircle} />
		</div>
	)
}

export const InvitesIcon = ({ classes = {} }) => {
	const styles = {
		icon: classnames('invites-icon', classes.root),
		element: classnames('invites-icon__image', classes.image)
	}

	return (
		<div className={styles.icon}>
			<img className={styles.image} src="/assets/invites.svg" />
		</div>
	)
}

export const ClickIcon = ({ classes = {} }) => {
	const styles = {
		icon: classnames('click-icon', classes.root),
		element: classnames('click-icon__image', classes.image)
	}

	return (
		<div className={styles.icon}>
			<img className={styles.image} src="/assets/click.svg" />
		</div>
	)
}

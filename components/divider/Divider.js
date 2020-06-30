import classnames from 'classnames'
import './styles.scss'

export const Divider = ({ classes = {}, bold, gradient }) => {
	const modifiers = {
		'divider--bold': bold,
		'divider--gradient': gradient
	}
	return (
		<div className={classnames('divider', classes.root, { ...modifiers })} />
	)
}

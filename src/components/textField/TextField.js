import classnames from 'classnames'
import './styles.scss'

export const TextField = ({ classes = {}, label, ...rest }) => {
	const styles = {
		root: classnames('text-field', classes.root),
		input: classnames('text-field__input', classes.input),
		label: classnames('text-field__label', classes.label)
	}

	return (
		<div className={styles.root}>
			{label && <label className={styles.label}>{label}</label>}
			<input className={styles.input} {...rest} />
		</div>
	)
}

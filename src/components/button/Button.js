import classnames from 'classnames'
import './styles.scss'

export const Button = props => {
	const { children, elementRef, onClick, outlined, link, classes = {} } = props

	const modifiers = {
		'button--outlined': outlined,
		'button--link': link
	}

	const styles = {
		button: classnames('button', classes.root, modifiers),
		container: classnames('button__container', classes.text)
	}

	return (
		<button ref={elementRef} onClick={onClick} className={styles.button}>
			<span className={styles.container}>{children}</span>
		</button>
	)
}

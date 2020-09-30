import classnames from 'classnames'
import { intl } from 'src/i18n'
import './styles.scss'

export const Button = props => {
	const {
		children,
		elementRef,
		onClick,
		outlined,
		link,
		loading,
		underlined,
		classes = {}
	} = props

	const modifiers = {
		'button--outlined': outlined,
		'button--link': link,
		'button--loading': loading,
		'button--underlined': underlined
	}

	const styles = {
		root: classnames('button', classes.root, modifiers),
		text: classnames('button__text', classes.text, modifiers)
	}

	return (
		<button
			disabled={loading}
			ref={elementRef}
			onClick={onClick}
			className={styles.root}
		>
			<span className={styles.text}>
				{loading ? intl.loading.description : children}
			</span>
		</button>
	)
}

import classnames from 'classnames'
import './styles.scss'

/**
 * @description in order to obtain the correct sizes set the global object font-size to 15px
 */

export const Typography = props => {
	const {
		children,
		classes = {},
		paragraph,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		h7,
		blue,
		white,
		black,
		charcoal,
		gray,
		light,
		bold,
		error
	} = props

	const sizes = {
		'typography--paragraph': paragraph,
		'typography--h1': h1,
		'typography--h2': h2,
		'typography--h3': h3,
		'typography--h4': h4,
		'typography--h5': h5,
		'typography--h6': h6,
		'typography--h7': h7
	}

	const colors = {
		'typography--blue': blue,
		'typography--white': white,
		'typography--black': black,
		'typography--charcoal': charcoal,
		'typography--gray': gray
	}

	const modifiers = {
		'typography--light': light,
		'typography--bold': bold,
		'typography--error': error
	}

	const styles = {
		typography: classnames('typography', classes.root, {
			...sizes,
			...colors,
			...modifiers
		})
	}

	return <span className={styles.typography}>{children}</span>
}

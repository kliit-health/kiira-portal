import classnames from 'classnames'
import './styles.scss'

/**
 * @description in order to obtain the correct sizes set the global object font-size to 15px
 */

export const Typography = ({
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
	white,
	black,
	charcoal,
	gray,
	light,
	bold
}) => {
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
		'typography--white': white,
		'typography--black': black,
		'typography--charcoal': charcoal,
		'typography--gray': gray
	}

	const modifiers = {
		'typography--light': light,
		'typography--bold': bold
	}

	return (
		<span
			className={classnames('typography', classes.root, {
				...sizes,
				...colors,
				...modifiers
			})}
		>
			{children}
		</span>
	)
}

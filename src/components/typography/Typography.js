import classnames from 'classnames'
import './styles.scss'

export const Typography = ({
	children,
	className,
	header,
	title,
	subtitle,
	h1,
	h2,
	h3,
	primary,
	secondary,
	tertiary,
	quartenary
}) => {
	return (
		<span
			className={classnames('typography', className, {
				'typography--header': header,
				'typography--title': title,
				'typography--subtitle': subtitle,
				'typography--h1': h1,
				'typography--h2': h2,
				'typography--h3': h3,
				'typography--primary': primary,
				'typography--secondary': secondary,
				'typography--tertiary': tertiary,
				'typography--quartenary': quartenary
			})}
		>
			{children}
		</span>
	)
}

import { Typography } from 'components'
import './styles.scss'

export const Section = ({ children, title, popRef }) => (
	<div ref={popRef} className="experts-section">
		<Typography tertiary title className="experts-section__title">
			{title}
		</Typography>
		<div className="experts-section__items">
			{children}
			<div className="experts-section__footer" />
		</div>
	</div>
)

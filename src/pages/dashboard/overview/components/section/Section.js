import { Typography } from 'components'
import './styles.scss'

export const Section = ({ children, title }) => (
	<div className="overview-section">
		<Typography tertiary header className="overview-section__title">
			{title}
		</Typography>
		<div className="overview-section__items">
			{children}
			<div className="overview-section__footer" />
		</div>
	</div>
)

import './styles.scss'

export const Container = ({ children }) => (
	<div className="container">
		<div className="container__constrains">{children}</div>
	</div>
)

import { Header } from 'components/header'
import styles from './layout.module.scss'

export const Layout = ({ children, ...rest }) => {
	return (
		<div>
			<Header {...rest} />
			{children}
		</div>
	)
}

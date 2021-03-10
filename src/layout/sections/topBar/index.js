import './styles.scss'

export const TopBar = ({ children }) => {
	const styles = {
		root: 'top-bar'
	}

	return <div className={styles.root}>{children}</div>
}

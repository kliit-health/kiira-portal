import classnames from 'classnames'
import './styles.scss'

export const Footer = props => {
	const { classes = {} } = props
	const styles = {
		footer: classnames('table-footer', classes.root)
	}
	return <div className={styles.footer}></div>
}

Footer.displayName = 'Footer'

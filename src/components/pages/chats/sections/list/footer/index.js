import './styles.scss'

export const Footer = ({ userCount = 0 }) => {
	const styles = {
		root: 'chats-table-footer',
		text: 'chats-table-footer__text'
	}

	return (
		<div className={styles.root}>
			<p className={styles.text}>{`Loaded ${userCount} user(s) `}</p>
		</div>
	)
}

Footer.displayName = 'Footer'

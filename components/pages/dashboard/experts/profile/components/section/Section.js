import classnames from 'classnames'
import { Typography } from 'components'
import './styles.scss'

export const Section = ({ title, description, children, classes = {} }) => {
	const styles = {
		section: 'profile-section',
		title: { root: 'profile-section__title' }
	}
	return (
		<div className={classnames(styles.section, classes.root)}>
			<Typography classes={styles.title} h5>
				{title}
			</Typography>
			{description && <Typography>{description}</Typography>}
			{children}
		</div>
	)
}

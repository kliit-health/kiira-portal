import classnames from 'classnames'
import { Typography } from 'src/components'
import './styles.scss'

export const Section = ({ title, description, children, classes = {} }) => {
	const styles = {
		section: 'experts-profile-section',
		title: { root: 'experts-profile-section__title' }
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

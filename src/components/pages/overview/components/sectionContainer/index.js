import classnames from 'classnames'
import { Typography } from 'src/components'
import './styles.scss'

const SectionContainer = ({ title, description, children, classes = {} }) => {
	const styles = {
		section: 'section-container',
		title: { root: 'section-container__title' }
	}

	return (
		<div className={classnames(styles.section, classes.root)}>
			<Typography charcoal bold h6 classes={styles.title}>
				{title}
			</Typography>
			{description && <Typography>{description}</Typography>}
			{children}
		</div>
	)
}

export default SectionContainer

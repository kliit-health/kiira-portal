import classnames from 'classnames'
import { Container, Typography } from 'src/components'
import './styles.scss'

export const Page = props => {
	const { title, subtitle, elementRef, children, classes = {} } = props
	const styles = {
		container: {
			constraints: classnames(classes.container, {
				'page__container-constraints': title
			})
		},
		content: classnames('page__content', classes.content),
		header: classnames('page__header', classes.header),
		title: { root: classnames('page__title', classes.title) },
		subtitle: { root: classnames('page__subtitle', classes.subtitle) }
	}

	return (
		<Container classes={styles.container} elementRef={elementRef}>
			<div className={styles.content}>
				{title && (
					<div className={styles.header}>
						<Typography h4 bold classes={styles.title}>
							{title}
						</Typography>
						<Typography h7 charcoal classes={styles.subtitle}>
							{subtitle}
						</Typography>
					</div>
				)}
				{children}
			</div>
		</Container>
	)
}

import classnames from 'classnames'
import { Container, Typography } from 'src/components'
import { cloneChild, cloneChildren } from 'src/helpers/functions'
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
		subtitle: { root: classnames('page__subtitle', classes.subtitle) },
		toolbar: classnames('page__toolbar', classes.toolbar)
	}

	return (
		<Container classes={styles.container} elementRef={elementRef}>
			<div className={styles.content}>
				{title && (
					<div className={styles.header}>
						<Typography h4 bold classes={styles.title}>
							{title}
						</Typography>
						<div className={styles.toolbar}>
							<Typography h7 charcoal classes={styles.subtitle}>
								{subtitle}
							</Typography>
							{cloneChild(children, 'Dropdown')}
							{cloneChild(children, 'DateRangePicker')}
						</div>
					</div>
				)}
				{cloneChildren(children, ['Dropdown', 'DateRangePicker', false])}
			</div>
		</Container>
	)
}

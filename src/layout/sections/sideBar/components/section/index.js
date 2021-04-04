import { useState, Fragment } from 'react'
import { cloneChildren } from 'src/helpers/functions'
import { Collapse } from 'react-collapse'
import { Typography } from 'src/components'
import classnames from 'classnames'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import './styles.scss'

export const Section = props => {
	const {
		iconUrl,
		title,
		children,
		classes = {},
		onClick,
		active,
		path
	} = props

	const [isOpened, setIsOpened] = useState(false)
	const hasChildren = children instanceof Array

	const styles = {
		chevron: classnames('sidebar-section__chevron', {
			'sidebar-section__chevron--active': isOpened
		}),
		section: classnames('sidebar-section', {
			'sidebar-section--active': active
		}),
		panel: 'sidebar-section__panel',
		icon: classnames('sidebar-section__icon', classes.icon),
		collapse: {
			collapse: classnames('sidebar-section-collapse', {
				'sidebar-section-collapse--open': isOpened
			})
		}
	}

	const handleOnSection = () => {
		if (path && onClick) {
			onClick(props)
		} else {
			setIsOpened(!isOpened)
		}
	}

	return (
		<Fragment>
			<div className={styles.section} onClick={handleOnSection}>
				<img className={styles.icon} src={iconUrl} />
				<Typography h7 white>
					{title}
				</Typography>
				{hasChildren && <ChevronRightIcon className={styles.chevron} />}
			</div>
			<Collapse isOpened={isOpened} theme={styles.collapse}>
				{hasChildren && cloneChildren(children, _, { isOpened })}
			</Collapse>
		</Fragment>
	)
}

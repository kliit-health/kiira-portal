import { useState, cloneElement } from 'react'
import { Collapse } from 'react-collapse'
import { Typography } from 'src/components'
import classnames from 'classnames'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import './styles.scss'

export const Section = ({
	iconUrl,
	title,
	children,
	classes = {},
	onClick,
	active
}) => {
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
		setIsOpened(!isOpened)
		if (onClick) {
			onClick()
		}
	}

	const renderItem = () => {
		if (hasChildren) {
			return children.map(child => cloneElement(child, { isOpened }))
		} else if (children) {
			return cloneElement(children, { isOpened })
		}
	}

	const renderChevron = () => {
		return hasChildren && <ChevronRightIcon className={styles.chevron} />
	}

	return (
		<div className={styles.section}>
			<div className={styles.panel} onClick={handleOnSection}>
				<img className={styles.icon} src={iconUrl} />
				<Typography h7 white>
					{title}
				</Typography>
				{renderChevron()}
			</div>
			<Collapse isOpened={isOpened} theme={styles.collapse}>
				{renderItem()}
			</Collapse>
		</div>
	)
}

export const SectionItem = ({ title, onClick, isOpened }) => {
	const styles = {
		item: classnames('sidebar-section-item', {
			'sidebar-section-item--active': isOpened
		}),
		title: 'sidebar-section-item__title'
	}
	return (
		<div className={styles.item} onClick={onClick}>
			<Typography white className={styles.title}>
				{title}
			</Typography>
		</div>
	)
}

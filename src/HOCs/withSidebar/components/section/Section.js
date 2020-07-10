import { useState, cloneElement } from 'react'
import { Collapse } from 'react-collapse'
import { Typography } from 'components'
import classnames from 'classnames'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import './styles.scss'

export const Section = ({ icon: Icon, title, children, classes, onClick }) => {
	const [isOpened, setIsOpened] = useState(false)
	const hasChildren = children instanceof Array

	const styles = {
		chevron: classnames('sidebar-section__chevron', {
			'sidebar-section__chevron--active': isOpened
		}),
		section: 'sidebar-section',
		panel: 'sidebar-section__panel',
		icon: 'sidebar-section__icon',
		iconElement: classnames(
			'sidebar-section__icon-element',
			classes && classes.icon
		),
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
				<div className={styles.icon}>
					<Icon className={styles.iconElement} />
				</div>
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

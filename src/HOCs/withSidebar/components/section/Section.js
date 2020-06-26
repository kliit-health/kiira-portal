import { useState, cloneElement } from 'react'
import { Collapse } from 'react-collapse'
import { Typography } from 'components'
import classnames from 'classnames'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import './styles.scss'

export const Section = ({ icon: Icon, title, children, classes, onClick }) => {
	const [isOpened, setIsOpened] = useState(false)
	const hasChildren = children instanceof Array

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
		return (
			hasChildren && (
				<ChevronRightIcon
					className={classnames('sidebar-section__chevron', {
						'sidebar-section__chevron--active': isOpened
					})}
				/>
			)
		)
	}

	return (
		<div className="sidebar-section">
			<div className="sidebar-section__panel" onClick={handleOnSection}>
				<div className="sidebar-section__icon">
					<Icon
						className={classnames(
							'sidebar-section__icon-element',
							classes && classes.icon
						)}
					/>
				</div>
				<Typography h3 secondary>
					{title}
				</Typography>
				{renderChevron()}
			</div>
			<Collapse
				isOpened={isOpened}
				theme={{
					collapse: classnames('sidebar-section-collapse', {
						'sidebar-section-collapse--open': isOpened
					})
				}}
			>
				{renderItem()}
			</Collapse>
		</div>
	)
}

export const SectionItem = ({ title, onClick, isOpened }) => (
	<div
		className={classnames('sidebar-section-item', {
			'sidebar-section-item--active': isOpened
		})}
		onClick={onClick}
	>
		<Typography h4 secondary className="sidebar-section-item__title">
			{title}
		</Typography>
	</div>
)

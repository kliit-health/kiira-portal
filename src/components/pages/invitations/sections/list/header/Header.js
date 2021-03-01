import { useState, useEffect } from 'react'
import classnames from 'classnames'
import { PlusIcon, ChevronIcon } from 'src/components/icons'
import { Typography, Button, SearchField } from 'src/components'
import { intl } from 'src/i18n'
import { HEADER } from 'src/helpers/constants'
import model from '../model'
import './styles.scss'

export const Header = ({ onAddUsers, elementRef, onSort, onSearch }) => {
	const [activeKey, setActiveKey] = useState('')
	const [ascendant, setAscendant] = useState(false)

	useEffect(() => {
		if (!ascendant) {
			setAscendant(!ascendant)
		}
	}, [activeKey])

	const handleActiveKey = key => {
		onSort(key, ascendant)
		setActiveKey(key)
		setAscendant(!ascendant)
	}

	const handleSearch = ({ target: { value } }) => {
		onSearch(value)
	}

	const root = 'invitations-list-header'
	const styles = {
		root,
		item: `${root}__item`,
		title: { root: `${root}__title` },
		controls: `${root}__controls`,
		container: `${root}__container`,
		icon: { root: `${root}__icon` },
		chevron: `${root}__chevron`
	}

	return (
		<div className={styles.root}>
			<div className={styles.controls}>
				{/* <SearchField
					onSearch={handleSearch}
					placeholder={intl.searchInvitations.description}
				/> */}
				<Button elementRef={elementRef} onClick={onAddUsers} link>
					<PlusIcon classes={styles.icon} />
					{intl.addUsers.description}
				</Button>
			</div>
			<div className={styles.container}>
				{model.map(({ dataKey, label, style }) => {
					const active = dataKey === activeKey
					const sorted = dataKey === activeKey && ascendant

					return (
						<div
							className={styles.item}
							key={dataKey}
							onClick={() => handleActiveKey(dataKey)}
							style={style}
						>
							<Typography classes={styles.title}>{label}</Typography>
							<ChevronIcon
								classes={{
									root: classnames(styles.chevron, {
										[`${root}__chevron--sorted`]: sorted,
										[`${root}__chevron--active`]: active
									})
								}}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}

Header.displayName = HEADER

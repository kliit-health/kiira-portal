import { useState, useEffect } from 'react'
import classnames from 'classnames'
import { ChevronIcon } from 'src/components/icons'
import { Typography, SearchField } from 'src/components'
import { HEADER } from 'src/helpers/constants'
import model from '../model'
import './styles.scss'

export const Header = ({ onSort, onSearch }) => {
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

	const root = 'chats-table-header'
	const styles = {
		root,
		item: `${root}__item`,
		title: { root: `${root}__title` },
		controls: `${root}__controls`,
		container: `${root}__container`,
		chevron: `${root}__chevron`
	}

	return (
		<div className={styles.root}>
			<div className={styles.controls}>
				{/* <SearchField
					onSearch={handleSearch}
					placeholder={intl.searchActiveUsers.description}
				/> */}
			</div>
			<div className={styles.container}>
				{model.map(({ dataKey, label, style, sorting }) => {
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

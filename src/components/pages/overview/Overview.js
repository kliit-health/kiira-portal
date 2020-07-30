import { useState, useRef } from 'react'
import { Page, Typography } from 'src/components'
import { List, Profile } from '../experts/sections'
import { intl } from 'src/i18n'
import './styles.scss'

export const Overview = () => {
	const popRef = useRef(null)
	const [anchorEl, setAnchorEl] = useState(null)
	const [profileData, setProfileData] = useState(null)

	const handleClick = item => {
		setAnchorEl(popRef.current)
		setProfileData(item)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const styles = {
		page: { content: 'overview__page' },
		title: 'overview__section-title',
		section: 'overview__section'
	}

	return (
		<Page
			title={intl.overview.description}
			subtitle={intl.everthingInOnePlace.description}
			elementRef={popRef}
			classes={styles.page}
		>
			<div className={styles.section}>
				<div className={styles.title}>
					<Typography charcoal bold>
						{intl.topExperts.description}
					</Typography>
				</div>
				<List onClick={handleClick} limit={3} />
				{profileData && (
					<Profile
						onClose={handleClose}
						anchorEl={anchorEl}
						data={profileData}
					/>
				)}
			</div>
		</Page>
	)
}

import { useState, useRef } from 'react'
import { Page } from 'src/components'
import { List, Profile } from './sections'
import { intl } from 'src/i18n'
import './styles.scss'

export const Experts = () => {
	const styles = {
		page: { content: 'experts__page' }
	}

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

	return (
		<Page
			elementRef={popRef}
			title={intl.kiiraCareTeam.description}
			subtitle={intl.kiiraExpertsCheckOut.description}
			classes={styles.page}
		>
			<List onClick={handleClick} />
			{profileData && (
				<Profile onClose={handleClose} anchorEl={anchorEl} data={profileData} />
			)}
		</Page>
	)
}

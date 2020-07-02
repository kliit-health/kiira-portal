import { useState, useRef } from 'react'
import { Page } from 'components'
import { List, Profile } from './sections'
import { intl } from 'i18n'
import './styles.scss'

export const Experts = () => {
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
			title={intl.ourExperts.description}
			subtitle={intl.weCare.description}
		>
			<List onClick={handleClick} />
			{profileData && (
				<Profile onClose={handleClose} anchorEl={anchorEl} data={profileData} />
			)}
		</Page>
	)
}

import { useState, useRef } from 'react'
import { Page } from 'components'
import { List, Profile } from '../experts/sections'
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

	return (
		<Page elementRef={popRef}>
			<List onClick={handleClick} limit={3} />
			{profileData && (
				<Profile onClose={handleClose} anchorEl={anchorEl} data={profileData} />
			)}
		</Page>
	)
}

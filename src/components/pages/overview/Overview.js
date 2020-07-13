import { useState, useRef } from 'react'
import { Page } from 'src/components'
import { List, Profile } from '../experts/sections'
import './styles.scss'

export const Overview = () => {
	const styles = {
		page: { content: 'overview__page' }
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
		<Page elementRef={popRef} classes={styles.page}>
			<List onClick={handleClick} limit={3} />
			{profileData && (
				<Profile onClose={handleClose} anchorEl={anchorEl} data={profileData} />
			)}
		</Page>
	)
}

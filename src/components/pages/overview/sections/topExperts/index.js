import { useState, useRef, useEffect } from 'react'
import { List, Profile } from '../../../experts/sections'
import './styles.scss'

const TopExperts = ({ onRefChange }) => {
	const popRef = useRef(null)
	const [anchorEl, setAnchorEl] = useState(null)
	const [profileData, setProfileData] = useState(null)

	useEffect(() => {
		onRefChange(popRef)
	}, [popRef])

	const handleClick = item => {
		setAnchorEl(popRef.current)
		setProfileData(item)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const styles = {
		root: 'top-experts',
		section: 'top-experts__section'
	}

	return (
		<div className={styles.section}>
			<List onClick={handleClick} limit={3} />
			{profileData && (
				<Profile onClose={handleClose} anchorEl={anchorEl} data={profileData} />
			)}
		</div>
	)
}

export default TopExperts

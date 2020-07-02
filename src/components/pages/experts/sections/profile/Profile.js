import { Typography, Divider, Popover, CancelButton } from 'components'
import { Header, Section } from '../../components'
import { intl } from 'i18n'
import { formatAddress, formatHours } from '../../helpers'
import './styles.scss'

export const Profile = ({ anchorEl, onClose, data }) => {
	const { rating, profileInfo, clinicInfo, isOnline } = data
	const {
		bio,
		firstName,
		lastName,
		profileImageUrl: url,
		profession,
		languages
	} = profileInfo
	const { fullName, specialities } = profession
	const { state, city, name, address, zipcode, hours } = clinicInfo
	const lang = languages.map(item => item.value).join(', ')

	const styles = {
		profile: 'expert-profile',
		font: { root: 'expert-profile__typography' },
		divider: { root: 'expert-profile__divider' },
		sections: 'expert-profile__sections'
	}

	return (
		<Popover anchorEl={anchorEl} onClose={onClose}>
			<CancelButton onCancel={onClose} />
			<div className={styles.profile}>
				<Header
					fullName={`${firstName} ${lastName}`}
					profession={fullName}
					status={isOnline}
					avatarUrl={url}
					rating={rating}
					location={`${city}, ${state.code}`}
				/>
				<div className={styles.sections}>
					<Divider bold gradient styles={styles.divider} />
					<Section title={intl.bio.description} description={bio} />
					<Section
						title={intl.specialties.description}
						description={specialities}
					/>
					<Section title={intl.languages.description} description={`${lang}`} />
					<Section title={intl.clinicInfo.description}>
						<Typography styles={styles.font}>{name}</Typography>
						<Typography styles={styles.font}>{address}</Typography>
						<Typography styles={styles.font}>
							{formatAddress(city, state.value, zipcode)}
						</Typography>
					</Section>
					<Section title={intl.hours.description}>
						{hours.map(({ day, startTime, endTime }, index) => (
							<Typography key={index + day} styles={styles.font}>
								{formatHours(day, startTime, endTime)}
							</Typography>
						))}
					</Section>
				</div>
			</div>
		</Popover>
	)
}

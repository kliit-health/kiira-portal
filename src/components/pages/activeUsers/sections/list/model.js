import { DATE, TEXT, AVATAR } from 'src/helpers/constants'

export default [
	{
		style: { maxWidth: 108, flex: 2, pointerEvents: 'none' },
		label: '',
		dataKey: 'profileImageUrl',
		type: AVATAR,
		sorting: false
	},
	{
		style: { maxWidth: 213.3, flex: 4 },
		label: 'First Name',
		dataKey: 'firstName',
		type: TEXT,
		sorting: true
	},
	{
		style: { maxWidth: 213.3, flex: 4 },
		label: 'Last Name',
		dataKey: 'lastName',
		type: TEXT,
		sorting: true
	},
	{
		style: { maxWidth: 266.6, flex: 5 },
		label: 'Email',
		dataKey: 'email',
		type: TEXT,
		sorting: true
	},
	{
		style: { maxWidth: 213.3, flex: 4 },
		label: 'Date of Birth',
		dataKey: 'dob',
		type: TEXT,
		sorting: true
	},
	{
		style: { maxWidth: 266.6, flex: 5 },
		label: 'Phone Number',
		dataKey: 'phoneNumber',
		type: TEXT,
		sorting: true
	}
]

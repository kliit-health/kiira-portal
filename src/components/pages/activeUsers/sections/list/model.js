import { DATE, TEXT, AVATAR } from 'src/helpers/constants'

export default [
	{
		style: { flex: 2, minWidth: 40, pointerEvents: 'none' },
		label: '',
		dataKey: 'profileImageUrl',
		type: AVATAR,
		sorting: false
	},
	{
		style: { flex: 5, minWidth: 100 },
		label: 'First Name',
		dataKey: 'firstName',
		type: TEXT,
		sorting: true
	},
	{
		style: { flex: 5, minWidth: 100 },
		label: 'Last Name',
		dataKey: 'lastName',
		type: TEXT,
		sorting: true
	},
	{
		style: { flex: 7, minWidth: 200 },
		label: 'Email',
		dataKey: 'email',
		type: TEXT,
		sorting: true
	},
	{
		style: { flex: 4, minWidth: 100 },
		label: 'Date of Birth',
		dataKey: 'dob',
		type: TEXT,
		sorting: true
	}
]

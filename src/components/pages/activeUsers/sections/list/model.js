import { DATE, TEXT, AVATAR } from 'src/helpers/constants'

export default [
	{
		style: { flex: 2, minWidth: 40 },
		label: '',
		dataKey: 'profileImageUrl',
		type: AVATAR
	},
	{
		style: { flex: 5, minWidth: 100 },
		label: 'First Name',
		dataKey: 'firstName',
		type: TEXT
	},
	{
		style: { flex: 5, minWidth: 100 },
		label: 'Last Name',
		dataKey: 'lastName',
		type: TEXT
	},
	{
		style: { flex: 7, minWidth: 200 },
		label: 'Email',
		dataKey: 'email',
		type: TEXT
	},
	{
		style: { flex: 2, minWidth: 80 },
		label: 'Date of Birth',
		dataKey: 'dob',
		type: TEXT
	}
]

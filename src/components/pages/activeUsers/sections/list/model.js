import { DATE, TEXT, AVATAR } from 'src/helpers/constants'

export default [
	{
		style: { maxWidth: 193.3, flex: 4 },
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
		style: { maxWidth: 286.6, flex: 6 },
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
		style: { maxWidth: 166.6, flex: 4 },
		label: 'Phone Number',
		dataKey: 'phoneNumber',
		type: TEXT,
		sorting: true
	},
	{
		style: { maxWidth: 218, flex: 4 },
		label: 'Sign Up Date',
		dataKey: 'signUpDate',
		type: DATE,
		sorting: true
	}
]

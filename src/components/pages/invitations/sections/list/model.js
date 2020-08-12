import { DATE, TEXT } from 'src/helpers/constants'

export default [
	{
		style: { minWidth: 100, flex: 6 },
		label: 'First Name',
		dataKey: 'firstName',
		type: TEXT
	},
	{
		style: { minWidth: 100, flex: 6 },
		label: 'Last Name',
		dataKey: 'lastName',
		type: TEXT
	},
	{
		style: { minWidth: 180, flex: 12 },
		label: 'Email',
		dataKey: 'email',
		type: TEXT
	},
	{
		style: { minWidth: 140, flex: 4 },
		label: 'Date of Invite',
		dataKey: 'createdAt',
		type: DATE
	},
	{
		style: { minWidth: 80, flex: 2 },
		label: 'Sign Up',
		dataKey: 'signUp',
		type: TEXT
	}
]

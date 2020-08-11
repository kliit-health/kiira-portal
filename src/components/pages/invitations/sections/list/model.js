import { DATE, TEXT } from 'src/helpers/constants'

export default [
	{
		style: { minWidth: 180, flex: 8 },
		label: 'Name',
		dataKey: 'displayName',
		type: TEXT
	},
	{
		style: { minWidth: 180, flex: 10 },
		label: 'Email',
		dataKey: 'email',
		type: TEXT
	},
	{
		style: { minWidth: 170, flex: 7 },
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

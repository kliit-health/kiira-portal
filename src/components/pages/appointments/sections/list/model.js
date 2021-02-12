import { DATE, TEXT, POPOVER } from 'src/helpers/constants'

export default [
	{
		style: { maxWidth: 213.3, flex: 4 },
		label: 'First Name',
		dataKey: 'firstName',
		type: TEXT
	},
	{
		style: { maxWidth: 213.3, flex: 4 },
		label: 'Last Name',
		dataKey: 'lastName',
		type: TEXT
	},
	{
		style: { maxWidth: 258.8, flex: 7 },
		label: 'Email',
		dataKey: 'email',
		type: TEXT
	},
	{
		style: { maxWidth: 168, flex: 3 },
		label: 'Expert',
		dataKey: 'expertName',
		type: POPOVER
	},
	{
		style: { maxWidth: 213.3, flex: 4 },
		label: 'Created At',
		dataKey: 'createdAt',
		type: DATE
	}
]

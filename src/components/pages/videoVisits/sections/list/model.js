import { DATE, TEXT } from 'src/helpers/constants'

export default [
	{
		style: { maxWidth: 256, flex: 4 },
		label: 'First Name',
		dataKey: 'firstName',
		type: TEXT
	},
	{
		style: {
			maxWidth: 256,
			flex: 4
		},
		label: 'Last Name',
		dataKey: 'lastName',
		type: TEXT
	},
	{
		style: { maxWidth: 256, flex: 7 },
		label: 'Email',
		dataKey: 'email',
		type: TEXT
	},
	{
		style: { maxWidth: 256, flex: 4 },
		label: 'Expert',
		dataKey: 'expertName',
		type: TEXT
	},
	{
		style: { maxWidth: 256, flex: 4 },
		label: 'Created At',
		dataKey: 'createdAt',
		type: DATE
	}
]

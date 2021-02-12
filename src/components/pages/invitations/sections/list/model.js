import { DATE, TEXT, POPOVER } from 'src/helpers/constants'

export default [
	{
		style: { maxWidth: 213.3, flex: 4 },
		label: 'First Name',
		dataKey: 'firstName',
		type: TEXT
	},
	{
		style: {
			maxWidth: 213.3,
			flex: 4
		},
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
		style: { maxWidth: 213.3, flex: 4 },
		label: 'Date of Invite',
		dataKey: 'invitationDate',
		type: DATE
	},
	{
		style: { maxWidth: 213.3, flex: 4 },
		label: 'Phone Number',
		dataKey: 'phoneNumber',
		type: TEXT
	},
	{
		style: { maxWidth: 168, flex: 3 },
		label: 'Status',
		dataKey: 'status',
		type: POPOVER
	}
]

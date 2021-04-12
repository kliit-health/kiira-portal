import { DATE, TEXT, POPOVER } from 'src/helpers/constants'

export default {
	list: [
		{
			label: 'First Name',
			dataKey: 'firstName',
			type: TEXT
		},
		{
			label: 'Last Name',
			dataKey: 'lastName',
			type: TEXT
		},
		{
			label: 'Email',
			dataKey: 'email',
			type: TEXT
		},
		{
			label: 'Date of Invite',
			dataKey: 'invitationDate',
			type: DATE
		},
		{
			label: 'Phone Number',
			dataKey: 'phoneNumber',
			type: TEXT
		},
		{
			label: 'Status',
			dataKey: 'status',
			type: POPOVER
		}
	]
}

import { DATE, TEXT } from 'src/helpers/constants'

export default {
	list: [
		{
			label: 'First Name',
			dataKey: 'firstName',
			type: TEXT,
			sorting: true
		},
		{
			label: 'Last Name',
			dataKey: 'lastName',
			type: TEXT,
			sorting: true
		},
		{
			label: 'Email',
			dataKey: 'email',
			type: TEXT,
			sorting: true
		},
		{
			label: 'Date of Birth',
			dataKey: 'dob',
			type: TEXT,
			sorting: true
		},
		{
			label: 'Phone Number',
			dataKey: 'phoneNumber',
			type: TEXT,
			sorting: true
		},
		{
			label: 'Sign Up Date',
			dataKey: 'signUpDate',
			type: DATE,
			sorting: true
		}
	],
	menu: [
		{
			name: 'Download List',
			id: 'activeUsersList'
		}
	]
}

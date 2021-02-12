import { intl } from 'src/i18n'

export const sections = [
	{
		title: intl.overview.description,
		iconUrl: '/assets/dashboard.svg',
		path: '/dashboard/overview'
	},
	{
		title: intl.invitationsTitle.description,
		iconUrl: '/assets/envelope.svg',
		path: '/dashboard/invitations'
	},
	{
		title: intl.careTeam.description,
		iconUrl: '/assets/experts.svg',
		path: '/dashboard/experts'
	},
	{
		title: intl.activeUsers.description,
		iconUrl: '/assets/users.svg',
		path: '/dashboard/active-users'
	},
	{
		title: intl.questionsAsked.description,
		iconUrl: '/assets/envelope.svg',
		path: '/dashboard/questions'
	},
	{
		title: intl.appointments.description,
		iconUrl: '/assets/envelope.svg',
		path: '/dashboard/appointments'
	}
]

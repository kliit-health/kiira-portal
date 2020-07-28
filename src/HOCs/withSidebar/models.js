import { intl } from 'src/i18n'

export const sections = [
	{
		title: intl.overview.description,
		iconUrl: '/assets/dashboard.svg',
		path: '/dashboard/overview'
	},
	{
		title: intl.activeUsers.description,
		iconUrl: '/assets/users.svg',
		path: '/dashboard/active-users'
	},
	{
		title: intl.careTeam.description,
		iconUrl: '/assets/experts.svg',
		path: '/dashboard/experts'
	},
	{
		title: intl.invitationsTitle.description,
		iconUrl: '/assets/envelope.svg',
		path: '/invitations'
	}
]

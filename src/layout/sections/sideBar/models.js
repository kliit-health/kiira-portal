import { intl } from 'src/i18n'

export default {
	sections: [
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
			title: intl.inactiveUsers.description,
			iconUrl: '/assets/users.svg',
			path: '/dashboard/inactive-users'
		},
		{
			title: intl.chats.description,
			iconUrl: '/assets/chat.svg',
			path: '/dashboard/chats'
		},
		{
			title: intl.videoVisits.description,
			iconUrl: '/assets/calendar.svg',
			path: '/dashboard/video-visits'
		}
	]
}

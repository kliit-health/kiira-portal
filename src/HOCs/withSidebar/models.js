import BarChartIcon from '@material-ui/icons/BarChart'
import DraftsIcon from '@material-ui/icons/Drafts'
import { intl } from 'i18n'

export const sections = [
	{
		title: intl.dashboard.description,
		icon: BarChartIcon,
		items: [
			{ title: intl.overview.description, path: '/dashboard/overview' },
			{ title: intl.topics.description, path: '/dashboard/topics' },
			{ title: intl.experts.description, path: '/dashboard/experts' }
		]
	},
	{
		title: intl.invitations.description,
		icon: DraftsIcon,
		classes: { icon: 'with-sidebar__invitations-icon' },
		path: '/invitations'
	}
]

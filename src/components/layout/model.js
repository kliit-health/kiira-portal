import { DASHBOARD_PAGE, LOGIN_PAGE, HOME, NOT_FOUND } from 'constants/index'

export const LAYOUT_TYPES = {
	NONE: 'none',
	WITH_SIDEBAR: 'with_sidebar'
}

const { WITH_SIDEBAR, NONE } = LAYOUT_TYPES

export const model = [
	{
		pathname: DASHBOARD_PAGE,
		type: WITH_SIDEBAR
	},
	{
		pathname: LOGIN_PAGE,
		type: NONE
	},
	{
		pathname: HOME,
		type: NONE
	},
	{
		pathname: NOT_FOUND,
		type: NONE
	}
]

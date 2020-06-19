// import { cloneElement } from 'react'
// import { useRouter } from 'next/router'
// import { switchCase } from '@/helpers/functions'
// import { model, LAYOUT_TYPES } from './model'
// import { WithSidebar } from './components'

// const { WITH_SIDEBAR } = LAYOUT_TYPES

// export const Layout = ({ children }) => {
// 	const router = useRouter()

// 	const renderPageWithLayout = children => {
// 		const { type } = model.find(item => item.pathname === router.pathname)
// 		return switchCase({
// 			[WITH_SIDEBAR]: () => <WithSidebar>{children}</WithSidebar>
// 		})(cloneElement(children))(type)
// 	}
// 	return renderPageWithLayout(children)
// }

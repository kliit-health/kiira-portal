import { renameObjectKeys } from 'src/helpers/functions'

export const formatData = data => {
	const rejected = data.map(({ user: { displayName, email }, error }) => {
		const { message } = error.errorInfo
		const keysMap = {
			displayName: 'Name',
			email: 'Email',
			message: 'Reason'
		}
		return renameObjectKeys(keysMap, { displayName, email, message })
	})
	return rejected
}

import { renameObjectKeys } from 'src/helpers/functions'

export const formatData = data =>
	data.map(({ user: { firstName, lastName, email }, error }) => {
		const { message } = error.errorInfo
		const keysMap = {
			firstName: 'First Name',
			lastName: 'Last Name',
			email: 'Email',
			error: 'Reason'
		}
		return renameObjectKeys(keysMap, { firstName, lastName, email, message })
	})

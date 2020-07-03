import { parseCSV } from 'helpers/functions'
import { createUser } from 'helpers/firebase/functions'
import { Page } from 'components'

import { Dropzone } from './components'

export const Invitations = props => {
	const styles = {}

	const handleDrop = async files => {
		const file = files[0]
		if (file) {
			try {
				const document = await parseCSV(file)
			} catch (errors) {
				console.log(errors)
			}
		}
	}

	const handleOnClick = () => {}

	return (
		<Page>
			<Dropzone onDrop={handleDrop} />
			<button onClick={handleOnClick}>Create User</button>
		</Page>
	)
}

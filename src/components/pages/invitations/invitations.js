import { parseCSV } from 'helpers/functions'
import { Page } from 'components'
import { Dropzone } from './components'

export const Invitations = props => {
	const styles = {}

	const handleError = event => {}

	const handleLoad = async event => {}

	const readFile = file => {}

	const handleDrop = async files => {
		const file = files[0]
		if (file) {
			try {
				const document = await parseCSV(file)
				console.log(document)
			} catch (errors) {
				console.log(errors)
			}
		}
	}

	return (
		<Page>
			<Dropzone onDrop={handleDrop} />
		</Page>
	)
}

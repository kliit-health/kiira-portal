import { useContext, useEffect, useState } from 'react'
import { Dropzone as ReactDropzone, Typography } from 'src/components'
import { UploaderContext } from '../../Uploader'
import { intl } from 'src/i18n'
import { parseToCsv } from 'src/helpers/functions'
import { CSVLink } from 'react-csv'
import './styles.scss'

export const InitialScreen = () => {
	const styles = { root: 'uploader-initial-screen' }

	return (
		<div className={styles.root}>
			<Sample />
			<Example />
			<Dropzone />
		</div>
	)
}

const Sample = () => {
	const [file, setFile] = useState(null)

	const styles = {
		sample: 'uploader-sample',
		image: 'uploader-sample__image',
		description: { root: 'uploader-sample__description' },
		link: 'uploader-sample__link'
	}

	useEffect(() => {
		parseToCsv([{ Name: '', Email: '' }]).then(result => setFile(result))
	}, [])

	return (
		<div className={styles.sample}>
			<img className={styles.image} alt="" src="/assets/csv.svg" />
			<Typography classes={styles.description}>
				{file && (
					<CSVLink
						className={styles.link}
						filename={'kiira-invitations-list'}
						data={file}
					>
						{intl.download.description}
					</CSVLink>
				)}
				{intl.theSample.description}
				<Typography bold>{intl.dotCsv.description}</Typography>
				{intl.listEveryone.description}
			</Typography>
		</div>
	)
}

const Example = () => {
	const styles = {
		sample: 'uploader-example',
		image: 'uploader-example__image',
		description: { root: 'uploader-example__description' }
	}

	return (
		<div className={styles.sample}>
			<img className={styles.image} alt="" src="/assets/example.svg" />
			<Typography classes={styles.description}>
				{intl.matchExample.description}
			</Typography>
		</div>
	)
}

const Dropzone = () => {
	const { handleDrop } = useContext(UploaderContext)

	const styles = {
		root: 'uploader-dropzone',
		image: 'uploader-dropzone__image',
		description: { root: 'uploader-dropzone__description' },
		dropzone: { root: 'uploader-dropzone__dropzone-component' }
	}

	return (
		<ReactDropzone classes={styles.dropzone} onDrop={handleDrop}>
			<div className={styles.root}>
				<img className={styles.image} alt="" src="/assets/inbox.svg" />
				<Typography classes={styles.description}>
					<Typography bold>{intl.dragAndDrop.description}</Typography>
					{intl.fileHere.description}
					<Typography bold>{intl.click.description}</Typography>
					{intl.toSelect.description}
				</Typography>
			</div>
		</ReactDropzone>
	)
}

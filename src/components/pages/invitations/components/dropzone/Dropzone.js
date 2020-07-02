import { Typography } from 'components'
import ReactDropzone from 'react-dropzone'
import './styles.scss'

export const Dropzone = ({ onDrop }) => {
	const styles = {
		dropzone: 'invitations-dropzone',
		description: 'invitations-dropzone__description',
		image: 'invitations-dropzone__image'
	}

	return (
		<ReactDropzone
			maxSize={5000000}
			multiple={false}
			onDrop={onDrop}
			accept=".csv"
		>
			{({ getRootProps, getInputProps }) => (
				<section>
					<div {...getRootProps()} className={styles.dropzone}>
						<input {...getInputProps()} />
						<img className={styles.image} alt="" src="/assets/invitation.png" />
						<div className={styles.description}></div>
					</div>
				</section>
			)}
		</ReactDropzone>
	)
}

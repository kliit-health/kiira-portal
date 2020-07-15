import ReactDropzone from 'react-dropzone'
import classnames from 'classnames'
import './styles.scss'

export const Dropzone = props => {
	const {
		onDrop,
		children,
		maxSize = 9999999,
		multiple = false,
		accept = '.csv',
		classes = {}
	} = props

	const styles = {
		dropzone: classnames('dropzone', classes.root)
	}

	return (
		<ReactDropzone
			maxSize={maxSize}
			multiple={multiple}
			onDrop={onDrop}
			accept={accept}
		>
			{({ getRootProps, getInputProps }) => (
				<div {...getRootProps()} className={styles.dropzone}>
					<input {...getInputProps()} />
					{children}
				</div>
			)}
		</ReactDropzone>
	)
}

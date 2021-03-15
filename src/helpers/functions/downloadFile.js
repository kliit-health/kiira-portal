import axios from 'axios'
import fileDownload from 'js-file-download'

export const downloadFile = ({ url, data, fileName }) => {
	axios
		.post(url, data, {
			responseType: 'blob'
		})
		.then(response => fileDownload(response.data, fileName))
}

import Papa from 'papaparse'

export const parseCSV = file =>
	new Promise((resolve, reject) => {
		Papa.parse(file, {
			header: true,
			skipEmptyLines: true,
			worker: true,
			complete: result => {
				resolve(result)
			},
			error: error => {
				reject(error)
			}
		})
	})

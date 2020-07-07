import Papa from 'papaparse'
import { PARSE_CSV_ERRORS } from 'errors'

const { MISSING_FILE } = PARSE_CSV_ERRORS

export const parseCSV = file =>
	new Promise((resolve, reject) => {
		if (!file) reject(MISSING_FILE)
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

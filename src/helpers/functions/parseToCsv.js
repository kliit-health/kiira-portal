import Papa from 'papaparse'
import { PARSE_CSV_ERROR } from 'src/error'
const { MISSING_FILE } = PARSE_CSV_ERROR

export const parseToCsv = data =>
	new Promise((resolve, reject) => {
		if (!data) {
			reject(MISSING_FILE)
			return
		}
		const result = Papa.unparse(data, {
			quotes: false,
			escapeChar: '"',
			delimiter: ',',
			header: true
		})
		resolve(result)
	})

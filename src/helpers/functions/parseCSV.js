import Papa from 'papaparse'
import { PARSE_CSV_ERROR } from 'src/error'
import { toCamelCase } from './toCamelCase'
const { MISSING_FILE, BAD_FILE } = PARSE_CSV_ERROR

export const parseCsv = (file, keysMap) =>
	new Promise((resolve, reject) => {
		if (!file) reject(MISSING_FILE)
		Papa.parse(file, {
			header: true,
			transformHeader: header => {
				return toCamelCase(header)
			},
			skipEmptyLines: true,
			complete: ({ data, errors }) => {
				if (errors.length > 0) {
					reject(BAD_FILE)
					return
				}
				const keys = Object.keys(keysMap)
				const validated = data.map(item => {
					keys.forEach(key => {
						const missingProperty = !item.hasOwnProperty(key)
						if (missingProperty) {
							reject('bad file', key, item)
							return
						}
					})
					return item
				})
				resolve(validated)
				return
			},
			error: error => {
				console.error(error)
				reject(BAD_FILE)
				return
			}
		})
	})

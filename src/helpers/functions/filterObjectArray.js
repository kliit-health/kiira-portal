export const filterObjectArray = (array, value) =>
	array.filter(object =>
		Object.keys(object).some(key => {
			if (typeof object[key] !== 'string') return
			const item = object[key].toLowerCase()
			const searchString = value.toLowerCase()
			return item.includes(searchString)
		})
	)

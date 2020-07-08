import { useEffect, useState } from 'react'
import { firestore } from '../firebase'

export const useFirebaseFetch = (collectionName, conditions, limit = 100) => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const queryFirestore = async () => {
			try {
				const collection = firestore.collection(collectionName)
				let query

				conditions.forEach(condition => {
					query = collection.where(...condition)
				})

				const response = await query.limit(limit).get()
				if (response) {
					const data = response.docs.map(item => item.data())
					setData(data)
				}
			} catch (error) {
				setError(error)
			} finally {
				setLoading(false)
			}
		}

		if (conditions && collectionName) {
			queryFirestore()
		}
	}, [])

	return { loading, data, error }
}

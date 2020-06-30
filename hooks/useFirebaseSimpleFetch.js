import { useEffect, useState } from 'react'
import { firestore } from 'helpers/firebase'

export const useFirebaseSimpleFetch = (
	collectionName,
	condition,
	limit = 100
) => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const queryFirestore = async () => {
			try {
				const collection = firestore.collection(collectionName)
				const query = collection.where(...condition).limit(limit)
				const response = await query.get()
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
		queryFirestore()
	}, [])

	return { loading, data, error }
}

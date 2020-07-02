import { useEffect, useState } from 'react'
import { firestore } from 'helpers/firebase'

export const useFirebaseSingleFetch = (collectionName, id) => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const queryFirestore = async () => {
			try {
				const collection = firestore.collection(collectionName)
				const query = collection.doc(id)
				const response = await query.get()
				if (response) {
					const data = response.data()
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

import { parseCSV } from 'helpers/functions'
import { createUsers } from '../../../firebase'
import { Page, Table, Typography } from 'components'
import { Dropzone } from './components'

const data = [
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 10 },
	{ dessert: 'Eclair', calories: 130, fat: 2 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 18 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 10 },
	{ dessert: 'Eclair', calories: 130, fat: 2 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 18 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 10 },
	{ dessert: 'Eclair', calories: 130, fat: 2 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 18 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 10 },
	{ dessert: 'Eclair', calories: 130, fat: 2 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 18 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 10 },
	{ dessert: 'Eclair', calories: 130, fat: 2 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 18 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 10 },
	{ dessert: 'Eclair', calories: 130, fat: 2 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 18 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 10 },
	{ dessert: 'Eclair', calories: 130, fat: 2 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 18 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 10 },
	{ dessert: 'Eclair', calories: 130, fat: 2 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 18 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 10 },
	{ dessert: 'Eclair', calories: 130, fat: 2 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 18 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 10 },
	{ dessert: 'Eclair', calories: 130, fat: 2 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 18 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 10 },
	{ dessert: 'Eclair', calories: 130, fat: 2 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 18 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 10 },
	{ dessert: 'Eclair', calories: 130, fat: 2 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 18 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 10 },
	{ dessert: 'Eclair', calories: 130, fat: 2 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 18 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 10 },
	{ dessert: 'Eclair', calories: 130, fat: 2 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 18 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 10 },
	{ dessert: 'Eclair', calories: 130, fat: 2 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 18 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 10 },
	{ dessert: 'Eclair', calories: 130, fat: 2 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 18 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 10 },
	{ dessert: 'Eclair', calories: 130, fat: 2 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 18 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 10 },
	{ dessert: 'Eclair', calories: 130, fat: 2 },
	{ dessert: 'Frozen yoghurt', calories: 159, fat: 18 }
]

const model = [
	{
		flex: 2,
		label: 'Dessert',
		dataKey: 'dessert'
	},
	{
		flex: 1,
		label: 'Calories',
		dataKey: 'calories'
	},
	{
		flex: 1,
		label: 'Fat',
		dataKey: 'fat'
	}
]
const { Footer, Header, Column } = Table

export const Invitations = () => {
	const styles = {}

	return (
		<Page>
			<Table data={data}>
				<Header model={model} classes={styles.header} />
				{model.map(({ dataKey, flex }, index) => (
					<Column flex={flex} key={`${index}-${dataKey}`}>
						{({ data }) => {
							return <Typography>{data[dataKey]}</Typography>
						}}
					</Column>
				))}
				<Footer />
			</Table>
		</Page>
	)
}

// const handleDrop = async files => {
// 	const file = files[0]

// 	parseCSV(file)
// 		.then(({ data }) => {
// 			createUsers(data)
// 				.then(resolve => console.log(resolve))
// 				.catch(error => console.error(error))
// 		})
// 		.catch(error => console.error(error))
// }

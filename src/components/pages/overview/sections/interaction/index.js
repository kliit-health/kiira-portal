import { memo } from 'react'
import { PieChart, Pie, Cell } from 'recharts'
import { Typography, CircularProgress, LegendItem } from 'src/components'
import { intl } from 'src/i18n'
import model from './model'
import './styles.scss'

const radian = Math.PI / 180

export default memo(({ data: incoming, loading }) => {
	const data = model.map(({ dataKey, label, color }) => ({
		value: incoming[dataKey],
		label,
		color
	}))

	const styles = {
		root: 'assistance-chart',
		legend: 'assistance-chart__legend',
		title: {
			root: 'assistance-chart__title'
		}
	}

	return (
		<div className={styles.root}>
			<Typography classes={styles.title} gray h8 bold>
				{intl.typeOfInteraction.description.toUpperCase()}
			</Typography>
			{loading ? (
				<CircularProgress />
			) : (
				<PieChart width={330} height={330}>
					<Pie
						data={data}
						cx={165}
						cy={165}
						labelLine={false}
						label={({
							cx,
							cy,
							midAngle,
							innerRadius,
							outerRadius,
							percent
						}) => {
							const radius = innerRadius + (outerRadius - innerRadius) * 0.5
							const x = cx + radius * Math.cos(-midAngle * radian)
							const y = cy + radius * Math.sin(-midAngle * radian)

							return (
								<text
									style={{ fontFamily: 'Roboto-Regular', fontSize: 14 }}
									x={x}
									y={y}
									fill="white"
									textAnchor={x > cx ? 'start' : 'end'}
									dominantBaseline="central"
								>
									{`${(percent * 100).toFixed(0)}%`}
								</text>
							)
						}}
						outerRadius={100}
						dataKey="value"
					>
						{data.map(({ color }, index) => (
							<Cell key={`cell-${index}`} fill={color} />
						))}
					</Pie>
				</PieChart>
			)}
			<div className={styles.legend}>
				{data.map(({ label, color }, index) => (
					<LegendItem key={`item-${index}`} label={label} color={color} />
				))}
			</div>
		</div>
	)
})

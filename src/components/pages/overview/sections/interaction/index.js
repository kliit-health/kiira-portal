import { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { PieChart, Pie, Cell } from 'recharts'
import { Typography, CircularProgress, LegendItem } from 'src/components'
import { intl } from 'src/i18n'
import model from './model'
import './styles.scss'

const radian = Math.PI / 180

export default memo(() => {
	const overview = useSelector(state => state.overview.data)
	const loading = useSelector(state => state.overview.loading)

	let data = []

	model.forEach(({ dataKey, label, color }) => {
		if (overview[dataKey] > 0) {
			data.push({
				value: overview[dataKey],
				label,
				color
			})
		}
	})

	const styles = {
		root: 'assistance-chart',
		legend: 'assistance-chart__legend',
		title: { root: 'assistance-chart__title' },
		message: { root: 'assistance-chart__message' }
	}

	return (
		<div className={styles.root}>
			<Typography classes={styles.title} gray h7 bold>
				{intl.typeOfInteraction.description.toUpperCase()}
			</Typography>
			{loading ? (
				<CircularProgress />
			) : data.length === 0 ? (
				<Typography classes={styles.message}>
					{intl.notEnoughData.description}
				</Typography>
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

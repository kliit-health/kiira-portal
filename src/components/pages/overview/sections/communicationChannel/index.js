import { memo, useEffect, useState } from 'react'
import { Typography } from 'src/components'
import { intl } from 'src/i18n'
import { PieChart, Pie, Sector, Cell } from 'recharts'
import './styles.scss'

const data = [{ value: 2.33 }, { value: 1 }]

const COLORS = [
	// '#0088FE',
	'#FF8042',
	'#FFBB28',
	'#FF8042',
	'#FF8042',
	'#00C49F',
	'#FFBB28'
]

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
	index,
	name,
	...rest
}) => {
	console.log({ ...rest })
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5
	const x = cx + radius * Math.cos(-midAngle * RADIAN)
	const y = cy + radius * Math.sin(-midAngle * RADIAN)

	return (
		<text
			style={{ fontFamily: 'Poppins-Regular', fontSize: 14 }}
			x={x}
			y={y}
			fill="white"
			textAnchor={x > cx ? 'start' : 'end'}
			dominantBaseline="central"
		>
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	)
}

const styles = {
	root: 'assistance-chart',
	title: {
		root: 'assistance-chart__title'
	}
}

export default memo(({ data: other, loading }) => {
	// useEffect(() => {
	// 	effect
	// 	return () => {
	// 		cleanup
	// 	}
	// }, [input])

	return (
		<div className={styles.root}>
			<Typography classes={styles.title} gray h8 bold>
				{intl.communicationChannel.description.toUpperCase()}
			</Typography>
			<PieChart width={330} height={330}>
				<Pie
					data={data}
					cx={165}
					cy={165}
					labelLine={false}
					label={renderCustomizedLabel}
					outerRadius={100}
					fill="#8884d8"
					dataKey="value"
				>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
			</PieChart>
		</div>
	)
})

import { memo, useEffect } from 'react'
import moment from 'moment'
import { CircularProgress, Typography } from 'src/components'
import { getSignUps } from 'src/redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer
} from 'recharts'
import { intl } from 'src/i18n'
import './styles.scss'

export const Activity = () => {
	const dispatch = useDispatch()
	const organizationId = useSelector(state => state.user.data.organizationId)
	const data = useSelector(state => state.signUps.data)
	const loading = useSelector(state => state.signUps.loading)

	useEffect(() => {
		let date = new Date()
		let oneMonthAgo = date.getMonth() - 1

		dispatch(
			getSignUps({ organizationId, startDate: date.setMonth(oneMonthAgo) })
		)
	}, [organizationId])

	const styles = {
		root: 'activity',
		section: 'activity__section',
		container: 'activity__container',
		title: { root: 'activity__title' },
		tooltip: 'activity__tooltip'
	}

	const renderTooltip = ({ payload }) => {
		if (payload && payload.length > 0) {
			return <div className={styles.tooltip}>{payload[0].payload.count}</div>
		}

		return null
	}

	return (
		<div className={styles.root}>
			{loading ? (
				<CircularProgress />
			) : (
				<div className={styles.container}>
					<Typography classes={styles.title} className gray h7 bold>
						{intl.dailyActivity.description.toUpperCase()}
					</Typography>
					<ResponsiveContainer width="100%" height="100%">
						<LineChart
							margin={{ top: 30, right: 30, bottom: 15, left: -10 }}
							data={data}
						>
							<CartesianGrid strokeDasharray="2 20" vertical={false} x={50} />
							<XAxis
								axisLine={false}
								tickLine={false}
								tickMargin={10}
								dataKey="date"
								tick={<DateTick />}
							/>
							<YAxis
								axisLine={false}
								tickLine={false}
								minTickGap={50}
								tickMargin={10}
								domain={[0, dataMax => (dataMax > 30 ? dataMax * 1.5 : 30)]}
								type="number"
								interval={0}
								tick={<TextTick />}
							/>
							<Tooltip content={renderTooltip} />
							<Line
								strokeWidth={2}
								type="monotone"
								dataKey="count"
								stroke="#0089FF"
								dot={{
									fill: 'red',
									strokeWidth: 2,
									stroke: 'white'
								}}
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>
			)}
		</div>
	)
}

const DateTick = ({ x, y, payload }) => {
	const date = moment(payload.value).format('DD')
	const day = moment(payload.value).format('ddd')

	return (
		<g transform={`translate(${x},${y})`}>
			<text
				x={0}
				y={0}
				dy={10}
				textAnchor="middle"
				fill="#666"
				fontFamily="Roboto"
				fontSize={14}
			>
				{date}
			</text>
			<text
				x={0}
				y={0}
				dy={25}
				textAnchor="middle"
				fill="#535A67"
				fontFamily="Roboto"
				fontSize={14}
			>
				{day}
			</text>
		</g>
	)
}

const TextTick = ({ x, y, payload }) => (
	<g transform={`translate(${x},${y})`}>
		<text
			x={0}
			y={0}
			dy={4}
			dx={-5}
			textAnchor="middle"
			fill="#535A67"
			fontFamily="Roboto"
			fontSize={14}
		>
			{payload.value}
		</text>
	</g>
)

export default memo(Activity)

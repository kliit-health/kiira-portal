import { Fragment, useRef, useState, useEffect } from 'react'
import classnames from 'classnames'
import { Popover } from '../popover'
import { Button } from '../button'
import { StaticDateRangePicker, LocalizationProvider } from '@material-ui/lab'
import AdapterMoment from '@material-ui/lab/AdapterMoment'

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import './styles.scss'
import moment from 'moment'

const defaultConfig = {
	anchorOrigin: {
		vertical: 'top',
		horizontal: 'right'
	},
	transformOrigin: {
		vertical: 'top',
		horizontal: 'right'
	}
}

export const DateRangePicker = ({
	classes = {},
	config = defaultConfig,
	onSubmit,
	initialValue = []
}) => {
	const popRef = useRef(null)
	const [anchorEl, setAnchorEl] = useState(null)
	const [range, setRange] = useState(initialValue)

	const handlePopover = () => {
		setAnchorEl(popRef.current)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleSelect = range => {
		setRange(range)
	}

	const handleSubmit = range => {
		if (onSubmit) {
			onSubmit(range)
			setAnchorEl(null)
		}
	}

	const styles = {
		root: classnames('date-range-picker', classes.root),
		icon: {
			root: 'date-range-picker__icon'
		},
		title: classnames('date-range-picker__title', classes.title),
		container: classnames(
			'date-range-picker__container',
			classes.titleContainer
		),
		button: {
			root: 'date-range-picker__button'
		}
	}

	return (
		<Fragment>
			<div className={styles.root} onClick={handlePopover}>
				<div className={styles.container} ref={popRef}>
					<span className={styles.title}>{formatRange(range)}</span>
					<ArrowDropDownIcon classes={styles.icon} />
				</div>
			</div>
			<Popover anchorEl={anchorEl} onClose={handleClose} {...config}>
				<LocalizationProvider dateAdapter={AdapterMoment}>
					<StaticDateRangePicker
						displayStaticWrapperAs="desktop"
						value={range}
						onChange={handleSelect}
						disableFuture
						renderInput={() => {}}
						maxDate={moment(range[0]).add(1, 'year')}
						minDate={moment(range[0]).add(-1, 'year')}
					/>
				</LocalizationProvider>
				<Button
					classes={styles.button}
					disabled={range.some(element => Boolean(element) === false)}
					onClick={() => handleSubmit(range)}
				>
					Submit
				</Button>
			</Popover>
		</Fragment>
	)
}

const formatRange = range =>
	range.reduce((string, date, index) => {
		const newDate = moment(date).format('l')
		string = index === 0 ? newDate + ' - ' : string + newDate
		return string
	}, '')

DateRangePicker.displayName = 'DateRangePicker'

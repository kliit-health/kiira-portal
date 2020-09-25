import classnames from 'classnames'
import { VirtualizedList, CircularProgress, Typography } from 'src/components'
import {
	Header,
	Row,
	Column,
	Footer,
	DateCell,
	TextCell,
	PopoverCell,
	AvatarCell
} from './components'
import { cloneChild } from 'src/helpers/functions'
import { intl } from 'src/i18n'
import './styles.scss'

export const Table = ({
	data = [],
	classes = {},
	children,
	rowHeight = 50,
	loading
}) => {
	const styles = {
		table: classnames('virtualized-list-table', classes.root),
		list: classnames('virtualized-list-table__list', classes.list),
		row: classes.row,
		fallback: {
			root: classnames('virtualized-list-table__fallback', classes.fallback)
		}
	}

	return (
		<div className={styles.table}>
			{cloneChild(children, 'Header')}
			<div className={styles.list}>
				{loading ? (
					<CircularProgress />
				) : data.length > 0 ? (
					<VirtualizedList
						itemData={data}
						itemCount={data.length}
						itemSize={rowHeight}
					>
						{({ style, index, data }) => (
							<Row classes={styles.row} key={index} style={style} index={index}>
								{cloneChild(children, 'Column', { data: data[index] })}
							</Row>
						)}
					</VirtualizedList>
				) : (
					<Typography classes={styles.fallback}>
						{intl.emptyList.description}
					</Typography>
				)}
			</div>
			{cloneChild(children, 'Footer')}
		</div>
	)
}

Table.Header = Header
Table.Footer = Footer
Table.Column = Column
Table.DateCell = DateCell
Table.TextCell = TextCell
Table.AvatarCell = AvatarCell
Table.PopoverCell = PopoverCell

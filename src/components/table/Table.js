import classnames from 'classnames'
import { VirtualizedList, CircularProgress } from 'src/components'
import {
	Header,
	Row,
	Column,
	Footer,
	DateCell,
	TextCell,
	AvatarCell
} from './components'
import { cloneChild } from 'src/helpers/functions'
import './styles.scss'

/**
 *
 * @param { Object[] } model
 * @param { number } model[].flex - The flex number that will determine the width of the column
 * @param { string } model[].label - The text for the header component label
 * @param { string } model[].dataKey - The data object key name
 * @param { Object } model[].style - Target styles to
 *
 */

export const Table = ({
	data = [],
	classes = {},
	children,
	rowHeight = 50
}) => {
	const styles = {
		table: classnames('virtualized-list-table', classes.root),
		list: classnames('virtualized-list-table__list', classes.list),
		row: classes.row
	}

	return (
		<div className={styles.table}>
			{cloneChild(children, 'Header')}
			<div className={styles.list}>
				{data.length > 0 ? (
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
					<CircularProgress />
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

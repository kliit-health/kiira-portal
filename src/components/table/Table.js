import classnames from 'classnames'
import { FixedSizeList } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'
import AutoSizer from 'react-virtualized-auto-sizer'
import { CircularProgress, Typography } from 'src/components'
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
	loading,
	loadMoreItems,
	isItemLoaded
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
				{loading && !data.length ? (
					<CircularProgress />
				) : data.length > 0 ? (
					<AutoSizer>
						{({ height, width }) => (
							<InfiniteLoader
								isItemLoaded={isItemLoaded}
								itemCount={1000000}
								loadMoreItems={loadMoreItems}
								minimumBatchSize={50}
								threshold={10}
							>
								{({ onItemsRendered, ref }) => (
									<FixedSizeList
										itemData={data}
										itemCount={data.length}
										itemSize={rowHeight}
										ref={ref}
										height={height}
										width={width}
										onItemsRendered={onItemsRendered}
										overscanCount={50}
									>
										{({ style, index, data }) => (
											<Row
												classes={styles.row}
												key={index}
												style={style}
												index={index}
											>
												{cloneChild(children, 'Column', {
													data: data[index]
												})}
											</Row>
										)}
									</FixedSizeList>
								)}
							</InfiniteLoader>
						)}
					</AutoSizer>
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

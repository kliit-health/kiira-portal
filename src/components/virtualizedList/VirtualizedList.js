import { FixedSizeList as List } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'

export const VirtualizedList = props => {
	const { itemData, data, itemCount, itemSize, children } = props

	return (
		<AutoSizer>
			{({ height, width }) => (
				<List
					data={data}
					height={height}
					width={width}
					itemCount={itemCount}
					itemSize={itemSize}
					itemData={itemData}
				>
					{children}
				</List>
			)}
		</AutoSizer>
	)
}

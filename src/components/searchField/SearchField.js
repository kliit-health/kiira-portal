import classnames from 'classnames'
import { string, shape, func } from 'prop-types'
import { SearchIcon } from 'src/components/icons'
import { intl } from 'src/i18n'
import './styles.scss'

const SearchField = ({ placeholder, classes, onSearch, ...rest }) => {
	const styles = {
		root: classnames('search-field', classes.root),
		input: classnames('search-field__input', classes.input),
		searchIcon: {
			element: classnames('search-field__search-icon', classes.searchIcon)
		}
	}

	return (
		<div className={styles.root}>
			<SearchIcon classes={styles.searchIcon} />
			<input
				placeholder={placeholder}
				className={styles.input}
				onChange={onSearch}
				{...rest}
			/>
		</div>
	)
}

SearchField.propTypes = {
	classes: shape({
		root: string,
		input: string,
		searchIcon: shape({
			root: string,
			element: string
		})
	}),
	placeholder: string,
	onSearch: func
}

SearchField.defaultProps = {
	classes: {},
	placeholder: intl.search.description
}

export default SearchField

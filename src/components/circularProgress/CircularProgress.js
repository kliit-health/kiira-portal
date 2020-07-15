import { CircularProgress as LoadingIndicator } from '@material-ui/core'
import classnames from 'classnames'
import './styles.scss'

export const CircularProgress = ({ classes = {}, ...rest }) => {
	const styles = {
		root: { root: classnames('circular-progress', classes.root) }
	}
	return <LoadingIndicator classes={styles.root} {...rest}></LoadingIndicator>
}

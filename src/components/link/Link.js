import NextLink from 'next/link'
import classnames from 'classnames'
import './styles.scss'

export const Link = ({ classes = {}, href, name, as }) => (
	<NextLink passHref as={as} href={href}>
		<a className={classnames('link', classes.root)}>{name}</a>
	</NextLink>
)

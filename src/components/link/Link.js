import NextLink from 'next/link'
import { Typography } from 'components'
import classnames from 'classnames'
import './styles.scss'

export const Link = ({ className, href, name, as }) => (
	<NextLink passHref as={as} href={href}>
		<a className={classnames('link', className && className)}>{name}</a>
	</NextLink>
)

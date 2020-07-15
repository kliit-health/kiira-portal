import { Children } from 'react'

export const mountChild = (children, name, props) => {
	if (children.length == 0) return
	return Children.map(children, child => {
		if (child.type.displayName === name) {
			return child(props)
		}
	})
}

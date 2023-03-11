import { expect, it } from 'vitest'
import { Equal, Expect } from '../helpers/type-utils'

export class Component<TProps> {
	private props: TProps

	constructor(props: TProps) {
		this.props = props
	}

	getProps = () => this.props
}
// first <T> after equal sign represents A generic is going to be used.
//  Which Type? the type that we got from Component, so we use Component<T>
const cloneComponent = <T>(component: Component<T>) => {
	return new Component(component.getProps())
}

it('Should clone the props from a passed-in Component', () => {
	const component = new Component({ a: 1, b: 2, c: 3 })
	const res = component.getProps()

	const clonedComponent = cloneComponent(component)

	const result = clonedComponent.getProps()

	expect(result).toEqual({ a: 1, b: 2, c: 3 })

	type tests = [
		Expect<Equal<typeof result, { a: number; b: number; c: number }>>
	]
})

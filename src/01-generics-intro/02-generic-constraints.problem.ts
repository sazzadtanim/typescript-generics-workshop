import { it } from 'vitest'
import { Equal, Expect } from '../helpers/type-utils'

type myFunction = <T extends string>(t: T) => T

export const returnWhatIPassIn: myFunction = (t) => t

it('Should ONLY allow strings to be passed in', () => {
	const a = returnWhatIPassIn('a')

	type test1 = Expect<Equal<typeof a, 'a'>>

	// @ts-expect-error
	returnWhatIPassIn(true)

	// @ts-expect-error
	returnWhatIPassIn({
		foo: 'bar',
	})
})

import { Equal, Expect } from '../helpers/type-utils'

export const createSet = <T>(): Set<T> => {
	return new Set()
}

const numberSet = createSet<number>()
const stringSet = createSet<string>()
const otherStringSet = createSet()

type tests = [
	Expect<Equal<typeof numberSet, Set<number>>>,
	Expect<Equal<typeof stringSet, Set<string>>>,
	Expect<Equal<typeof otherStringSet, Set<string>>>
]

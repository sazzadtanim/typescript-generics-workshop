import { Equal, Expect } from '../helpers/type-utils'

type FnType = <T>(something: T) => T

const returnWhatIPassIn: FnType = (t) => {
	return t
}

const one = returnWhatIPassIn(1)
const matt = returnWhatIPassIn('matt')

type tests = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof matt, 'matt'>>]

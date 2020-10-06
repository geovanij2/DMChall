import { expect } from 'chai'
import { validateIngredient } from '../../src/utils/ingredient'
import { isLeft, isRight } from 'fp-ts/lib/Either'

describe('validate ingredients parameters', () => {
	it('Should validate one ingredient', () => {
		const str = 'garlic'
		const test = validateIngredient(str)
		expect(isRight(test)).to.equal(true)
	})
	it('Should validate two ingredients', () => {
		const str = 'garlic,onion'
		const test = validateIngredient(str)
		expect(isRight(test)).to.equal(true)
	})
	it('Should validate three ingredients', () => {
		const str = 'garlic,onion,tomato'
		const test = validateIngredient(str)
		expect(isRight(test)).to.equal(true)
	})
	it('Should not validate more than three ingredients', () => {
		const str = 'garlic,onion,tomato,bread'
		const test = validateIngredient(str)
		expect(isLeft(test)).to.equal(true)
	})
})

import { Either, right, left } from 'fp-ts/lib/Either'


/**
 *
 * Ingredient has to be a specific string in the format {ingredient_1},{ingredient_2},{ingredient_3},
 * ignoring the curly brackets. With at most three ingredients.
 */
export interface Ingredient {
	i: string,
	_tag: 'Ingredient'
}

export function validateIngredient(i: string): Either<InvalidIngredient, Ingredient> {
	const a = i.split(',')
	if (a.length <= 3) {
		return right({ i, _tag: 'Ingredient' })
	} else {
		return left('InvalidIngredient')
	}
}

type InvalidIngredient = 'InvalidIngredient'

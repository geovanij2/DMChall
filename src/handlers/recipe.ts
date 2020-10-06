import { Request, Response } from 'express'
import * as giphyApi from '../api/giphy'
import * as recipePuppyApi from '../api/recipePuppy'
import { isLeft, isRight } from 'fp-ts/lib/Either'
import { validateIngredient } from '../utils/ingredient'

export async function getRecipes(req: Request, res: Response) {
	const {i} = req.query

	if (!i) {
		return res.status(400).json({ error: 'ParameterNotFound' })
	}

	const ingredient = validateIngredient(i as string)
	if (isLeft(ingredient)) {
		return res.status(400).json({ error: ingredient.left })
	}

	const keywords = ingredient.right.i.split(',')
	const data = await recipePuppyApi.getRecipes(ingredient.right)
	if (isRight(data)) {
		const recipes = await Promise.all(data.right.results.map(async (recipe) => {
			const gif = await giphyApi.getGifUrl(recipe.title)

			return {
				title: recipe.title,
				ingredients: recipe.ingredients.split(', ').sort(),
				link: recipe.href,
				gif
			}
		}))
		res.status(200).json({ keywords, recipes })
	} else {
		res.status(400).json({ error: data.left })
	}
}

import axios from 'axios'
import { Either, left, right } from 'fp-ts/lib/Either'
import { Ingredient } from '../utils/ingredient'

const recipePuppyClient = axios.create({
	baseURL: process.env.RECIPE_PUPPY_URL
})

export async function getRecipes(ingredients: Ingredient): Promise<Either<RecipePuppyApiError, RecipePuppyApiResponse>> {
	try {
		const {data} = await recipePuppyClient.get('/', { params: { i: ingredients.i }})

		return right(data)
	} catch (e) {
		return left('RecipePuppyApiError')
	}
}

interface RecipePuppyApiResponse {
	title: string,
	version: number,
	href: string,
	results: Recipe[]
}

interface Recipe {
	title: string,
	href: string,
	ingredients: string,
	thumbnail: string
}

type RecipePuppyApiError = 'RecipePuppyApiError'

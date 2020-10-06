import { Router } from 'express'
import * as handler from '../handlers/recipe'

export async function register(router: Router): Promise<void> {
	router.route('/recipes')
		.get(handler.getRecipes)
}

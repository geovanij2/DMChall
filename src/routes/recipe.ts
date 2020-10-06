import { Router } from 'express'
import * as handler from '../handlers/recipe'

export async function register(router: Router) {
	router.route('/recipes')
		.get(handler.getRecipes)
}

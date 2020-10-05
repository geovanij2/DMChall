import { Router } from 'express'
import * as handler from '../handlers/hello'

export async function register(router: Router) {
	router.route('/hello')
		.get(handler.hello)
}

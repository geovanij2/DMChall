import { Request, Response, Router } from 'express'
import * as recipeRouter from './recipe'

function errorHandler(err: any, req: Request, res: Response) {
	console.error(err)
	res.status(500).end()
}

const router = Router()

recipeRouter.register(router)

router.use(errorHandler)

export default router

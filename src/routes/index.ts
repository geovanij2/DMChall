import { Request, Response, NextFunction } from 'express'
import * as recipeRouter from './recipe'
const { Router } = require('express')

function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
	console.error(err)
	res.status(500).end()
}

const router = Router()

recipeRouter.register(router)

router.use(errorHandler)

export default router

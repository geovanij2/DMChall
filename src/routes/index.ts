import { Request, Response, NextFunction } from 'express'
import * as hello from './hello'
const { Router } = require('express')

function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
	console.error(err)
	res.status(500).end()
}

const router = Router()

hello.register(router)

router.use(errorHandler)

export default router

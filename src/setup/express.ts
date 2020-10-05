// import * as http from 'http'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import router from '../routes'

export async function setupExpress() {
	const app = express()

	app.use(morgan('dev'))
	app.use(express.json())
	app.use(cors())
	app.use(router)

	return app
}

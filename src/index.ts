import config from './setup/config'
import { setupExpress } from './setup/express'
import * as http from 'http'


export async function main(): Promise<http.Server> {
	const app = await setupExpress()
	const server = http.createServer(app)
	server.listen(config.PORT, () => {
		console.warn(`Server listening on port ${config.PORT}`)
	})
	return server
}

main()

import { Request, Response } from 'express'

export async function hello(req: Request, res: Response) {
	res.status(200).json({ msg: "Hello World" })
}

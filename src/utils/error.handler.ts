import { Response } from 'express'

export const handleHttp = (res: Response, error: string, rawError?: unknown) => {
    res.status(500).send({ error, })
    console.log(rawError)
}
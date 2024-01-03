import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handler'
import { randomWord } from '../services/word.services'

export const getWord = async (req: Request, res: Response) => {
    try {
        res.send(await randomWord())
    } catch (error) {
        handleHttp(res, 'ERROR_GET_WORD', error)
    }
}
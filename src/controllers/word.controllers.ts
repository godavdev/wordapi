import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handler'
import { insertWord, listWords } from '../services/word.services'

// export const getWords = async (req: Request, res: Response) => {
//     try {
//         res.send(await listWords())
//     } catch (error) {
//         handleHttp(res, 'ERROR_GET_WORDS', error)
//     }
// }

export const getWord = async (req: Request, res: Response) => {
    try {

    } catch (error) {
        handleHttp(res, 'ERROR_GET_WORD', error)
    }
}

// export const postWord = async ({ body }: Request, res: Response) => {
//     try {
//         res.send(await insertWord(body))
//     } catch (error) {
//         handleHttp(res, 'ERROR_POST_WORD', error)
//     }
// }

// export const putWord = async (req: Request, res: Response) => {
//     try {

//     } catch (error) {
//         handleHttp(res, 'ERROR_PUT_WORD', error)
//     }
// }

// export const deleteWord = async (req: Request, res: Response) => {
//     try {

//     } catch (error) {
//         handleHttp(res, 'ERROR_DELETE_WORDS', error)
//     }
// }
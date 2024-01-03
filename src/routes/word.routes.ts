import { Router } from 'express'
import { deleteWord, getWord, getWords, postWord, putWord } from '../controllers/word.controllers'

export const router = Router()
/** /api/ */

router.get('/api/', getWords)

router.get('/api/:id', getWord)

router.post('/api/', postWord)

router.put('/api/:id', putWord)

router.delete('/api/:id', deleteWord)
import { Router } from 'express'
import { getWord } from '../controllers/word.controllers'

export const router = Router()
/** /api/ */

router.get('/', getWord)

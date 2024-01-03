import { prisma } from "../db"
import { Word } from '../types/word.type'

export const listWords = async () => {
    const response = await prisma.word.findMany()
    return response
}
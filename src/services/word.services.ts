import { prisma } from "../db"
import { Word } from '../types/word.type'

export const insertWord = async (word: Omit<Word, 'id'>) => {
    const response = await prisma.word.create({
        data: {
            text: word.text,
            categoryId: word.categoryId
        }
    })
    return response
}

export const listWords = async () => {
    const response = await prisma.word.findMany()
    return response
}
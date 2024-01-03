import { Response } from "express"
import { prisma } from "../db"
import { Word } from '../types/word.type'

export const randomWord = async () => {
    const randomId = Math.ceil(Math.random() * (await prisma.word.count()))
    const response: Word | null = await prisma.word.findUnique({
        where: { id: randomId }
    })

    return response || {}
}
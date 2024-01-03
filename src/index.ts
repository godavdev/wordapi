import express from 'express'
import cors from 'cors'
import { router } from './routes/word.routes'

export const app = express()

const PORT = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(router)
app.listen(PORT || 3000)
console.log('Hola en' + PORT)
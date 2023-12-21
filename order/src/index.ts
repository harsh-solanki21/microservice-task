import 'express-async-errors'
import express from 'express'
import type { Express } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import SubscribeMessage from './utils/subscriber'

dotenv.config()

const app: Express = express()

app.use(cors())
app.use(express.json())
app.use(helmet())

const port: number = Number(process.env.PORT)

SubscribeMessage()

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

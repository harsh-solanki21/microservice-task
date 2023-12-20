import 'express-async-errors'
import express from 'express'
import type { Express } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import ConnectMongo from './config/mongo'
import SubscribeMessage from './utils/subscriber'

dotenv.config()

const app: Express = express()

app.use(cors())
app.use(express.json())

ConnectMongo()

SubscribeMessage()

const port: number = Number(process.env.PORT) ?? 5001

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

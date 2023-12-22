import { Request, Response } from 'express'
import dotenv from 'dotenv'
import { throwValidationErrors } from '../utils/throwValidationError'
import PublishMessage from '../utils/publisher'
import SubscribeMessage from '../utils/subscriber'

dotenv.config()

export const getAllUsers = async (req: Request, res: Response) => {
    throwValidationErrors(req)

    const payload = {
        table: 'USER',
        query: 'GET_ALL',
    }
    await PublishMessage(payload)
    const users = await SubscribeMessage()

    res.status(200).json(users)
}

export const getUser = async (req: Request, res: Response) => {
    throwValidationErrors(req)
    const { user_no } = req.params

    const payload = {
        table: 'USER',
        query: 'GET_BY_NO',
        requestData: user_no,
    }
    await PublishMessage(payload)

    res.status(200).json()
}

export const createUser = async (req: Request, res: Response) => {
    throwValidationErrors(req)

    const payload = {
        table: 'USER',
        query: 'CREATE',
        requestData: req.body,
    }
    await PublishMessage(payload)

    res.status(200).json({ message: 'User Created' })
}

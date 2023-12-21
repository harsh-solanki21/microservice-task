import { Request, Response } from 'express'
import dotenv from 'dotenv'
import { throwValidationErrors } from '../utils/throwValidationError'
import PublishMessage from '../utils/publisher'
import SubscribeMessage from '../utils/subscriber'

dotenv.config()

export const getAllUsers = async (req: Request, res: Response) => {
    throwValidationErrors(req)

    const payload = {
        query: 'GET_ALL_USERS',
    }
    await PublishMessage(payload)
    const users = await SubscribeMessage()
    console.log(users)

    res.status(200).json(users)
}

export const getUser = async (req: Request, res: Response) => {
    throwValidationErrors(req)
    const { user_no } = req.params

    const payload = {
        query: 'GET_USER_BY_NO',
        user_no,
    }
    await PublishMessage(payload)

    res.status(200).json()
}

export const createUser = async (req: Request, res: Response) => {
    throwValidationErrors(req)

    const payload = {
        query: 'CREATE_USER',
        requestData: req.body,
    }
    await PublishMessage(payload)

    res.status(200).json({ message: 'User Created!' })
}

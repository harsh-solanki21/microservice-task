import { Request, Response } from 'express'
import { throwValidationErrors } from '../utils/throwValidationError'

export const getAllUsers = async (req: Request, res: Response) => {
    throwValidationErrors(req)

    // await PublishMessage(user)

    res.status(200).json()
}

export const getUser = async (req: Request, res: Response) => {
    throwValidationErrors(req)
    const { user_no } = req.params

    // await PublishMessage(user)

    res.status(200).json()
}

export const createUser = async (req: Request, res: Response) => {
    throwValidationErrors(req)

    // await PublishMessage({ message: 'User Created!' })

    res.status(200).json({ message: 'User Created!' })
}

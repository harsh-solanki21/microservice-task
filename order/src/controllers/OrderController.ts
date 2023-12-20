import { Request, Response } from 'express'
import { throwValidationErrors } from '../utils/throwValidationError'
import PublishMessage from '../utils/publisher'

export const getAllOrders = async (req: Request, res: Response) => {
    throwValidationErrors(req)
    const { order_no } = req.params

    await PublishMessage(order)

    res.status(200).json(order)
}

export const getOrder = async (req: Request, res: Response) => {
    throwValidationErrors(req)
    const { order_no } = req.params

    await PublishMessage(order)

    res.status(200).json(order)
}

export const createOrder = async (req: Request, res: Response) => {
    throwValidationErrors(req)

    await PublishMessage()

    res.status(200).json({})
}

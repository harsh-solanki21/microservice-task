import { Request, Response } from 'express'
import { throwValidationErrors } from '../../../order/src/utils/throwValidationError'
import PublishMessage from '../../../order/src/utils/publisher'

export const getAllOrders = async (req: Request, res: Response) => {
    throwValidationErrors(req)
    const { order_no } = req.params

    // await PublishMessage()

    res.status(200).json()
}

export const getOrder = async (req: Request, res: Response) => {
    throwValidationErrors(req)
    const { order_no } = req.params

    // await PublishMessage()

    res.status(200).json()
}

export const createOrder = async (req: Request, res: Response) => {
    throwValidationErrors(req)

    // await PublishMessage()

    res.status(200).json({})
}

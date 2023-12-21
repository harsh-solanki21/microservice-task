import { Request, Response } from 'express'
import { throwValidationErrors } from '../../../order/src/utils/throwValidationError'
import PublishMessage from '../../../order/src/utils/publisher'
import SubscribeMessage from '../utils/subscriber'

export const getAllOrders = async (req: Request, res: Response) => {
    throwValidationErrors(req)

    const payload = {
        table: 'ORDER',
        query: 'GET_ALL',
    }
    await PublishMessage(payload)
    const orders = await SubscribeMessage()

    res.status(200).json(orders)
}

export const getOrder = async (req: Request, res: Response) => {
    throwValidationErrors(req)
    const { order_no } = req.params

    const payload = {
        table: 'ORDER',
        query: 'GET_BY_NO',
        requestData: order_no,
    }
    await PublishMessage(payload)

    res.status(200).json()
}

export const createOrder = async (req: Request, res: Response) => {
    throwValidationErrors(req)

    const payload = {
        table: 'ORDER',
        query: 'CREATE',
        requestData: req.body,
    }
    await PublishMessage(payload)

    res.status(200).json({ message: 'Order Created' })
}

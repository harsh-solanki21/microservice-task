import { Request, Response } from 'express'
import { throwValidationErrors } from '../../../order/src/utils/throwValidationError'
import PublishMessage from '../../../order/src/utils/publisher'
import SubscribeMessage from '../utils/subscriber'

export const getAllProducts = async (req: Request, res: Response) => {
    throwValidationErrors(req)

    const payload = {
        table: 'PRODUCT',
        query: 'GET_ALL',
    }
    await PublishMessage(payload)
    const products = await SubscribeMessage()

    res.status(200).json(products)
}

export const getProduct = async (req: Request, res: Response) => {
    throwValidationErrors(req)
    const { product_no } = req.params

    const payload = {
        table: 'PRODUCT',
        query: 'GET_BY_NO',
        requestData: product_no,
    }
    await PublishMessage(payload)

    res.status(200).json()
}

export const createProduct = async (req: Request, res: Response) => {
    throwValidationErrors(req)

    const payload = {
        table: 'PRODUCT',
        query: 'CREATE',
        requestData: req.body,
    }
    await PublishMessage(payload)

    res.status(200).json({ message: 'Product Created' })
}

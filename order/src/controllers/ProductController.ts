import { Request, Response } from 'express'
import { throwValidationErrors } from '../utils/throwValidationError'
import PublishMessage from '../utils/publisher'

export const getAllProducts = async (req: Request, res: Response) => {
    throwValidationErrors(req)

    await PublishMessage()

    res.status(200).json()
}

export const getProduct = async (req: Request, res: Response) => {
    throwValidationErrors(req)
    const { product_no } = req.params

    await PublishMessage()

    res.status(200).json()
}

export const createProduct = async (req: Request, res: Response) => {
    throwValidationErrors(req)

    await PublishMessage()

    res.status(200).json({ message: 'Calling Product...' })
}

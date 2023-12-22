import Product from '../model/Product'
import { BadRequest } from '../errors'

export const _getAllProducts = async () => {
    try {
        const product = await Product.find()
        return product
    } catch (error: any) {
        throw new BadRequest(error.message)
    }
}

export const _getProductByNo = async (product_no: number) => {
    try {
        const product = await Product.findOne({ product_no })
        return product
    } catch (error: any) {
        throw new BadRequest(error.message)
    }
}

export const _createProduct = async (payload: object) => {
    try {
        const product = await Product.create(payload)
        return product
    } catch (error: any) {
        throw new BadRequest(error.message)
    }
}

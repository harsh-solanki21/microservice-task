import Order from '../model/Order'
import { BadRequest } from '../errors'

export const _getAllOrders = async () => {
    try {
        const order = await Order.find()
        return order
    } catch (error: any) {
        throw new BadRequest(error.message)
    }
}

export const _getOrderByNo = async (order_no: number) => {
    try {
        const order = await Order.findOne({ order_no })
        return order
    } catch (error: any) {
        throw new BadRequest(error.message)
    }
}

export const _createOrder = async (payload: object) => {
    try {
        const order = await Order.create(payload)
        return order
    } catch (error: any) {
        throw new BadRequest(error.message)
    }
}

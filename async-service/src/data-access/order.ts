import Order from '../model/Order'
import Product from '../model/Product'
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

export const _createOrder = async (payload: any) => {
    try {
        const { order_products, discount } = payload

        let totalPrice: number = 0
        for (let i = 0; i < order_products.length; i++) {
            const product: any = await Product.findById(
                order_products[i].product_id
            )
            totalPrice += product.price * order_products[i].quantity
        }

        if (discount) {
            totalPrice = totalPrice - (totalPrice * discount) / 100
        }

        const order = await Order.create({
            order_products,
            discount: discount || 0,
            total_order_price: totalPrice,
        })

        return order
    } catch (error: any) {
        throw new BadRequest(error.message)
    }
}

import {
    _createOrder,
    _getAllOrders,
    _getOrderByNo,
} from '../data-access/order'
import {
    _createProduct,
    _getAllProducts,
    _getProductByNo,
} from '../data-access/product'
import {
    _createUser,
    _getAllUsers,
    _getUserByUserNo,
} from '../data-access/user'
import PublishMessage from '../utils/publisher'

const requestHandler = async (
    request: any,
    correlationId: string,
    replyTo: string
) => {
    const { table, query, requestData } = request
    let response: any

    if (table === 'USER') {
        switch (query) {
            case 'GET_ALL': {
                response = await _getAllUsers()
                break
            }
            case 'GET_BY_NO': {
                response = await _getUserByUserNo(requestData)
                break
            }
            case 'CREATE': {
                response = await _createUser(requestData)
                break
            }
            default: {
                break
            }
        }
    }

    if (table === 'PRODUCT') {
        switch (query) {
            case 'GET_ALL': {
                response = await _getAllProducts()
                break
            }
            case 'GET_BY_NO': {
                response = await _getProductByNo(requestData)
                break
            }
            case 'CREATE': {
                response = await _createProduct(requestData)
                break
            }
            default: {
                break
            }
        }
    }

    if (table === 'ORDER') {
        switch (query) {
            case 'GET_ALL': {
                response = await _getAllOrders()
                break
            }
            case 'GET_BY_NO': {
                response = await _getOrderByNo(requestData)
                break
            }
            case 'CREATE': {
                response = await _createOrder(requestData)
                break
            }
            default: {
                break
            }
        }
    }

    await PublishMessage(response, correlationId, replyTo)
}

export default requestHandler

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

const requestHandler = async (request: any) => {
    const { table, query, requestData } = request

    if (table === 'USER') {
        switch (query) {
            case 'GET_ALL': {
                return _getAllUsers()
            }
            case 'GET_BY_NO': {
                return _getUserByUserNo(requestData)
            }
            case 'CREATE': {
                return _createUser(requestData)
            }
            default: {
                break
            }
        }
    }

    if (table === 'PRODUCT') {
        switch (query) {
            case 'GET_ALL': {
                return _getAllProducts()
            }
            case 'GET_BY_NO': {
                return _getProductByNo(requestData)
            }
            case 'CREATE': {
                return _createProduct(requestData)
            }
            default: {
                break
            }
        }
    }

    if (table === 'ORDER') {
        switch (query) {
            case 'GET_ALL': {
                return _getAllOrders()
            }
            case 'GET_BY_NO': {
                return _getOrderByNo(requestData)
            }
            case 'CREATE': {
                return _createOrder(requestData)
            }
            default: {
                break
            }
        }
    }
}

export default requestHandler

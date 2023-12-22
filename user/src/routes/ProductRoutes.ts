import { Router } from 'express'
import { createProductValidations } from '../validations/ProductValidations'
import {
    getAllProducts,
    getProduct,
    createProduct,
} from '../controllers/ProductController'

const router: Router = Router()

router.get('/get/all', [], getAllProducts)

router.get('/get/:product_no', [], getProduct)

router.post('/create', [...createProductValidations], createProduct)

export default router

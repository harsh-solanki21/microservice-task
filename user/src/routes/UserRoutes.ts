import { Router } from 'express'
import { createUserValidations } from '../validations/UserValidations'
import { getUser, createUser, getAllUsers } from '../controllers/UserController'

const router: Router = Router()

router.get('/get/all', [], getAllUsers)

router.get('/get/:user_no', [], getUser)

router.post('/create', [...createUserValidations], createUser)

export default router

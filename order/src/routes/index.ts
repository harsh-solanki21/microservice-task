import type { Express } from 'express'
import ProductRoutes from './ProductRoutes'
import OrderRoutes from './OrderRoutes'

export const loadRoutes = (app: Express): void => {
    app.use('/api/v1/product', [], ProductRoutes)
    app.use('/api/v1/order', [], OrderRoutes)
}

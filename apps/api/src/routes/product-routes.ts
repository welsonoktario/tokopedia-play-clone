import { Router } from 'express'

import { findAllVideoProducts, findProduct } from '@controllers/product-controller'

const productRoutes: Router = Router()

productRoutes.get('/videos/:videoId/products', findAllVideoProducts)
productRoutes.get('/videos/:videoId/products/:productId', findProduct)

export default productRoutes

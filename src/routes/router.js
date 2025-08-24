import Router from 'express'
import ProductController from '../controllers/ProductController.js'

const router = new Router()

router.get('/products', ProductController.getAll)
router.get('/products/:id', ProductController.getOne)
router.post('/products', ProductController.post)
router.put('/products', ProductController.put)
router.delete('/products/:id', ProductController.delete)

export default router

import express from 'express'
import {createOrder,getSingleOrder} from '../controllers/order.js'
import auth from '../middleware/auth.js'
const router =express.Router()

router.post('/create',auth,createOrder)
router.get('/find/:id',getSingleOrder)

export default router
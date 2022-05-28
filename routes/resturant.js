import express from 'express'
import {createResturant,getResturant,getOneResturant} from '../controllers/resturant.js'

const router =express.Router()


router.post('/',createResturant)
router.get('/',getResturant)
router.get('/:id',getOneResturant)
export default router
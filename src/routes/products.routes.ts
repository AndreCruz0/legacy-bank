import { Router } from 'express';
import {productsController} from '../controllers/products.controller'

export const productsRouter = Router()

productsRouter.get('/products', productsController.list )
productsRouter.get('/products/:id', productsController.getById )
productsRouter.post('/transactions', productsController.create )


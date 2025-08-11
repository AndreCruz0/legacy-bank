import { Router } from 'express';
import {productsController} from '../controllers/products.controller'

export const transactionsRouter = Router()

transactionsRouter.get('/products', productsController.list)
transactionsRouter.get('/transactions/integrate', productsController.listIntegrateFalse)
transactionsRouter.get('/transactions/:id', productsController.getById )
transactionsRouter.post('/transactions', productsController.create )
transactionsRouter.put('/transactions/integrate', productsController.updateIntegrateStatus )



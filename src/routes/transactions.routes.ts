import { Router } from 'express';
import {productsController} from '../controllers/products.controller'

export const transactionsRouter = Router()

transactionsRouter.get('/list', productsController.list)
transactionsRouter.get('/integrate', productsController.listIntegrateFalse)
transactionsRouter.get('/:id', productsController.getById )
transactionsRouter.post('/create', productsController.create )
transactionsRouter.put('/integrate', productsController.updateIntegrateStatus )



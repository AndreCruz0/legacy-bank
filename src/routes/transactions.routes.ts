import { Router } from 'express';
import {TransactionController} from '../controllers/products.controller'

export const transactionsRouter = Router()

transactionsRouter.get('/list', TransactionController.list)
transactionsRouter.get('/integrate', TransactionController.listIntegrateFalse)
transactionsRouter.get('/:id', TransactionController.getById )
transactionsRouter.post('/create', TransactionController.create )
transactionsRouter.put('/integrate', TransactionController.updateIntegrateStatus )



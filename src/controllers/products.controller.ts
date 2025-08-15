import type { Request, Response } from 'express';
import {  transactionParamsSchema, transactionQuerySchema, transactionSchema } from '../schemas/transactions.schema';
import { transactionCollection } from '../models/transaction.model';
import { handleError } from '../shared/error';


export const TransactionController = {
  listIntegrateFalse : async (req:Request,res:Response) => {

try {
    const { integrate } = transactionQuerySchema.parse(req.query);

    if (Math.random() < 0.5) { 
        throw new Error("Falha temporária no banco legado!");
    }

    const data = await transactionCollection.find({ integrate }).lean();

    res.status(200).json(data);
} catch (e) {
    handleError(res, e);
}
  

  },

  list : async (req : Request , res : Response) => {
try {
     const data = await transactionCollection.find()
    return res.json(data)
} catch (e) {
    handleError(res , e)
}
   

  },

  updateIntegrateStatus  : async (req: Request , res : Response) => {

   try {
    
     const result = await transactionCollection.updateMany({integrate : false} , {$set : {integrate:true}})

    res.status(200).json({
      message: 'Atualização Concluida',
      matchedCount: result.matchedCount,   
      modifiedCount: result.modifiedCount,
    })

   } catch (e) {
    handleError(res, e)
   }

  },


  getById: async (req:Request,res:Response) => {
    try {
      const {id} = req.params
      const product = await transactionCollection.find({product_id : id})

      res.status(200).json(
        product
      )

    }catch(e){
      handleError(res,e)
    }
  },

  create: async (req:Request, res:Response) => {
    try {
      const result =  transactionSchema.parse(req.body)
  


     await   transactionCollection.create({...result })

      res.json({
        message: "Transação registrada com sucesso"
      })

    }catch (e){
      handleError(res,e)
    }
  }


}

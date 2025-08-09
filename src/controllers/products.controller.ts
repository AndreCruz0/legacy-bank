import type { Request, Response } from 'express';
import { transactionCollection, transactionParamsSchema, transactionSchema } from '../models/transaction.model';
import { handleError } from '../shared/error';


export const productsController = {
  list : async (req:Request,res:Response) => {
    // query http://localhost:5000?integrate:false
    
    const {integrate} = req.query

   

  try {
    
    // const  data = transactionCollection.find({integrate : false}).toArray()
    

  } catch (e) {
      handleError(res,e)
  }        

    


    const data = await transactionCollection.find()
    return res.json(data)
  },

  getById: async (req:Request,res:Response) => {
    try {
      const {id} = req.params
      const product = await transactionCollection.findById(id)

      res.json(
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

  // update: apos pegar os dados update para true

}

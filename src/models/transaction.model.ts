import mongoose, { Schema, model } from 'mongoose';
import { boolean, z } from 'zod';

export const transactionCollection = model(
	'Transaction',
	new Schema(
		{	
  	type: {
    type: String,
    enum: ['entrada', 'saida'],
  	required: true
},
    qty: { type: Number, required: true },
    integrate: { type: Boolean, default: false },
    product_id: { type: Number, required: true },  
		},
		{ timestamps: true },
	),
);
export const transactionQuerySchema = z.object({
	 integrate: z.string().transform(val => val === "true")
})
export const transactionSchema = z.object({
	_id: z.string().optional(),
	product_id : z.number(),
	type: z.enum(['entrada', 'saida']),
  	qty:z.number()
});

export const transactionParamsSchema = z.object({
		id: z
		.string()
		.refine(
			(val) => val === undefined || mongoose.Types.ObjectId.isValid(val),
			{
				message: 'ID inválido',
			},
		),
})

export type Transaction = z.infer<typeof transactionSchema>;

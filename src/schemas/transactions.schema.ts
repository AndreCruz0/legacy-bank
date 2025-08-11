import z from "zod"
import mongoose from "mongoose"

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

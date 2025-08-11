import  { Schema, model } from 'mongoose';

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

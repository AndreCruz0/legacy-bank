import mongoose from 'mongoose';
import { env } from '../shared/env';
import Logger from '../shared/logger';

export async function connect() {
	const dbUri = env.DATABASE_URL

	
	try {
		if (dbUri) {
			await mongoose.connect(dbUri , {
				 dbName: "products"
			});
			Logger.info('🚀 MongoDB conectado com sucesso');
		}
	} catch (e) {
		Logger.error('Erro ao conectar no banco de dados');
		throw new Error(`Erro ao conectar no servidor: ${e}`);
	}
}

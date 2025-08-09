import type { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Logger from '../shared/logger';
import { connect } from '../db/connectdb';
import { handleError } from '../shared/error';

export async function connectionMiddleware(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	try {
		if (mongoose.connection.readyState !== 1) {
      Logger.info('Criando conexão')
			await connect();
		}
		next();
	} catch (err) {
		handleError(res,err)
	}
}

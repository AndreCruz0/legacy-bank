import express from "express";
import cors from "cors";
import { transactionsRouter } from "./routes/transactions.routes";
import { connectionMiddleware } from "./middleware/connectionMiddleware";

// Swagger
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./swagger.json"; 
import Logger from "./shared/logger";

const app = express();

app.use(express.json());
app.use(connectionMiddleware);
app.use(cors({
  origin: ['http://localhost:3001', "http://localhost:4000"]
}));

app.use("/transactions", transactionsRouter);


app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(5000, () => {
  console.log('Servidor iniciado na porta http://localhost:5000');
  Logger.info('Swagger disponível em http://localhost:5000/docs');
});

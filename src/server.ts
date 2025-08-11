import express from "express";
import { transactionsRouter } from "./routes/transactions.routes";
import { connectionMiddleware } from "./middleware/connectionMiddleware";
import cors from 'cors';
const app = express()
app.use(express.json());
app.use(connectionMiddleware)
app.use(cors({
  origin: ['http://localhost:3001' , "http://localhost:4000"],
 
}));


app.use(transactionsRouter)

app.listen(5000, ()=> {
  console.log('Servidor iniciado na porta http://localhost:5000')
})

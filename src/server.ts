import express from "express";
import { productsRouter } from "./routes/products.routes";
import { connect } from "./db/connectdb";
import { connectionMiddleware } from "./middleware/connectionMiddleware";
import cors from 'cors';
const app = express()
app.use(express.json());
app.use(connectionMiddleware)
app.use(cors({
  origin: 'http://localhost:3001' 
}));

app.use(productsRouter)

app.listen(5000, ()=> {
  console.log('Servidor iniciado na porta http://localhost:5000')
})

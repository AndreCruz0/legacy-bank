import express from "express";
import { productsRouter } from "./routes/products.routes";
import { connect } from "./db/connectdb";
import { connectionMiddleware } from "./middleware/connectionMiddleware";
const app = express()
app.use(express.json());
app.use(connectionMiddleware)

app.use(productsRouter)

app.listen(5000, ()=> {
  console.log('Servidor iniciado na porta http://localhost:5000')
})

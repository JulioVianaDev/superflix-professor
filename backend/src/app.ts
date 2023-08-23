import express ,{Response,Request} from 'express';
import {json} from 'body-parser'  
const app = express()
import * as dotenv from "dotenv";
dotenv.config()
// const DB_URL = process.env.DB_URL;
// console.log(DB_URL)
app.use(json())

app.get("/oi",(req: Request,res: Response)=>{
  res.send("bem vindo")
})
app.post("/saymyname",(req: Request,res: Response)=>{
  const {nome} = req.body;
  if (nome == "Loky"){
    return res.send("LOOOOOKYYYYYYYYYYY")
  }else{
    return res.status(200).send("bem vindo")
  }
})

app.listen(3001,()=>{
  console.log("api rodando")
})

import { connect } from './database/connection';
connect()
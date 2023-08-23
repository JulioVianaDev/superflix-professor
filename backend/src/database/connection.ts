import * as dotenv from "dotenv";
dotenv.config();
const mongoose = require('mongoose')

const DB_URL = process.env.DB_URL;

export const connect = ()=>{
  mongoose.connect(DB_URL)
  const connection = mongoose.connection;

  connection.on("error",()=>{
    console.log("Erro ao conectar com o mongoDB")
  })

  connection.on("open",()=>{
    console.log("Conectado ao mongoDB com sucesso!")
  })
}


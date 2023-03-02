import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();


mongoose.connect(process.env.URL)

const db = mongoose.connection

db.on("connected", () => { console.log("Conectado a mongoDB con exito!") })
db.on("error", () => { console.log("Error en mongoDB") })

export default db;
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import db from './config/db.js';

import userRouter from './routes/usuarios.js'
import authRouter from './routes/auth.js'
import enlacesRouter from './routes/enlaces.js'
import archivosRouter from './routes/archivos.js'

const app = express()

const opcionesCors = {
    origin: process.env.FRONTEND_URL
}
const PORT = process.env.PORT || 8080;

mongoose.set('strictQuery', false);

//Leer valores del body
app.use(cors(opcionesCors));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/enlaces", enlacesRouter);
app.use("/archivos", archivosRouter);

// app.get("/", (req, res) => {
//     res.send("Hola")
// })

app.listen(PORT, () => {
    console.log('Servidor en ejecución en http://localhost:8080')
})
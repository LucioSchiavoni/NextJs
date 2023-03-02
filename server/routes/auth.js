import express from 'express';
const authRouter = express.Router();
import { check } from 'express-validator'
import { autenticarUser, userAutenticado } from '../controller/authController.js';
import { auth } from '../middleware/auth.js';


authRouter.post('/', (req, res) => {
    [
        check("email", "agrega email valido").isEmail(),
        check("password", "Debe contener 8 caracteres").min(8)
    ],
        autenticarUser
}
)


authRouter.get('/', (req, res) => {
    auth,
        userAutenticado
}
)



export default authRouter;
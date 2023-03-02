import express from 'express';
const userRouter = express.Router();
import newUser from '../controller/userController.js';
import { check } from 'express-validator'


userRouter.post("/", (req, res) => {
    [
        //Valido el nombre y pongo su mensaje de error
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("email", "El email debe ser valido").isEmail(),
        check("password", "Debe contener 8 caracteres").min(8)


    ],
        newUser
}
)


export default userRouter;
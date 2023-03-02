import Model from '../model/Model.js';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator'


const newUser = async (req, res) => {

    //Mostrar mensaje de error de express validator
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() })
    }

    const { email, password } = req.body;
    //Verificamos si existe el email
    let user = await Model.findOne({ email });

    if (user) {
        return res.status(400).json({ msg: "El usuario existe" })
    }

    //Si no existe creamos el user
    user = new Model(req.body);

    //Hasheamos la password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    try {
        await user.save()
        res.json({ msg: "Usuario creado correctamente" });
    } catch (error) {
        console.log(error);
    }

}

export default newUser;
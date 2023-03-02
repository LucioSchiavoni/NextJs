import jwt from 'jsonwebtoken';


export const auth = (req, res, next) => {

    const authHeader = req.get('Authorization');

    if (authHeader) {
        //Separa el token
        const token = authHeader.split('')[1];

        //Verificamos si esta bien
        const usuario = jwt.verify(process.env.JWT, token);
        req.usuario = usuario
        res.json({ usuario });
    } else {
        console.log("Error en el JWT");
    }
    return next();


}
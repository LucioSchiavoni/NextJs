import React, { useReducer } from "react";
import authContext from './authContext'
import authReducer from "./authReducer";
import { USUARIO_AUTENTICADO } from "../../types/index";

import clienteAxios from "../../config/axios";



const AuthState = ({ children }) => {

    const initialState = {
        token: '',
        autenticado: null,
        usuario: null,
        mensaje: null
    }
    //Reducer
    const [state, dispatch] = useReducer(authReducer, initialState)

    //Registrar nuevos usuarios
    const registrarUsuario = async datos => {
        try {
            const respuesta = await clienteAxios.post('/user', datos)
            console.log(respuesta)
        } catch (error) {
            console.log(error)
        }
    }
    //user autenticado
    const usuarioAutenticado = nombre => {
        dispatch({
            type: USUARIO_AUTENTICADO,
            payload: nombre
        })
    }

    return (
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                usuarioAutenticado,
                registrarUsuario
            }}>

            {children}

        </authContext.Provider>
    )
}

export default AuthState;
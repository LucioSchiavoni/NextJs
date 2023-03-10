import { Layout } from '@/components/Layout';
import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import authContext from '../context/auth/authContext';


const registrarse = () => {


    const AuthContext = useContext(authContext);
    const { registrarUsuario } = AuthContext;

    //validacion con formik
    const formik = useFormik({
        initialValues: {
            nombre: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({

            nombre: Yup.string().required("El nombre es obligatorio"),
            email: Yup.string().required("Campo Obligatorio").email("Debe ser un email Valido"),
            password: Yup.string().required("Campo Obligatorio").min(8, 'El password debe contener al menos 8 caracteres')
        }),

        onSubmit: valores => {
            registrarUsuario(valores)
        }

    })

    return (
        <Layout>
            <div className='md:w4/5 xl: w-3/5 mx-auto mb-32'>
                <h2 className='text-4xl font-sans font-bold text-center my-4'>Crear Cuenta</h2>
                <div className='flex justify-center mt-5'>
                    <div className='w-full max-w-lg'>
                        <form onSubmit={formik.handleSubmit} className='bg-transparent rounded shadow-xl px-8 pt-6 pb-8 mb-4'>
                            <div className='mb-4'>
                                <label className='block text-sky-500 text-sm font-bold mb-2' htmlFor='nombre'>Nombre de Usuario</label>
                                <input type="text"
                                    className='shadow bg-slate-800 border rounded w-full py-2 px-3 focus:out leading-tight text-white'
                                    id='nombre'
                                    placeholder='Nombre de Usuario'
                                    value={formik.values.nombre}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}

                                />
                                {formik.touched.nombre && formik.errors.nombre ? (
                                    <div className='bg-gray-200 border-l-4 border-red-500 p-2  text-red-700'>
                                        <p className='font-bold '>Error</p>
                                        <p>{formik.errors.nombre}.</p>
                                    </div>
                                ) : null}

                            </div>
                            <div className='mb-4'>
                                <label className='block text-sky-500  text-sm font-bold mb-2' htmlFor='email'>Email</label>
                                <input type="text"
                                    className='shadow bg-slate-800 appearance-none border rounded w-full py-2 px-3 focus:out leading-tight text-white'
                                    id='email'
                                    placeholder='Correo'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className='bg-gray-200 border-l-4 border-red-500 p-2  text-red-700'>
                                        <p className='font-bold '>Error</p>
                                        <p>{formik.errors.email}.</p>
                                    </div>
                                ) : null}

                            </div>
                            <div className='mb-4'>
                                <label className='block text-sky-500 text-sm font-bold mb-2' htmlFor='password'>Contrase??a</label>
                                <input type="password"
                                    className='shadow bg-slate-800 appearance-none border rounded w-full py-2 px-3 focus:out leading-tight text-white'
                                    id='password'
                                    placeholder='Contrase??a'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div className='bg-gray-200 border-l-4 border-red-500 p-2  text-red-700'>
                                        <p className='font-bold '>Error</p>
                                        <p>{formik.errors.password}.</p>
                                    </div>
                                ) : null}
                            </div>
                            <input type="submit" className='bg-sky-800 hover:bg-sky-700 rounded mt-4 w-full p-2 text-white uppercase font-sans font-bold'
                                value='Crear Cuenta'

                            />

                        </form>
                    </div>
                </div>

            </div>
        </Layout>
    )
}
export default registrarse
import React from 'react';
import Link from 'next/link';

export const Header = () => {
    return (

        <div className="navbar bg-transparent shadow-xl">
            <div className="flex-1">
                <Link href='/' className="btn btn-ghost normal-case text-xl">my app</Link>
            </div>
            <div className="flex-none mr-56">
                <div className="form-control">
                    <input type="text" placeholder="Buscar" className="input input-bordered bg-slate-800 w-80" />
                </div>  </div >
            <div className='mr-10 gap-4'>
                <Link href='/login' className='btn bg-slate-800'>
                    Iniciar Sesion
                </Link>
                <Link href='/registrarse' className='btn bg-slate-800'>
                    Registrarse
                </Link>
            </div>
            <div className="dropdown dropdown-end ">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-20 rounded-full">
                        <img src="favicon.ico" />
                    </div>
                </label>
                <ul className='menu menu-compact dropdown-content bg-slate-900 w-52 rounded-box pb-1 pt-1 mt-2'>
                    <li><a>Perfil</a></li>
                    <li><a>Configuracion</a></li>
                    <li><a>Cerrar sesion</a></li>
                </ul>
            </div>
        </div>


    )
}

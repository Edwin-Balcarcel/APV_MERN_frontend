import { useState } from 'react';
import {Link} from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Svgs from './Svgs';
import Svgf from './Svgf';

const Header = () => {

  const {cerrarSesion} = useAuth();
  const [mostrarMenu, setMostrarMenu] = useState(false);


  return (
    <header className="py-10 bg-indigo-600">
      <div className="grid-rows-2 container mx-auto lg:flex lg:flex-row justify-between items-center">
        <div className='hidden lg:flex lg:flex-row'>
          <h1 className="font-bold text-2xl text-teal-200 text-center">Administrador de Pacientes de {''} 
          <span className="text-white font-black">Veterinaria</span></h1>
        </div>

        <div className='lg:hidden'>
          <h1 className='font-bold text-2xl text-white text-center'>APV</h1>
        </div>

        <button 
            type="button"
            className="bg-indigo-600 text-white font-bold uppercase mt-0 p-3 rounded-md md:hidden"
            onClick={() => setMostrarMenu(!mostrarMenu)}
          >{mostrarMenu ? <Svgf /> : <Svgs />}</button>

        <div>
          <nav className={`${mostrarMenu ? 'visible flex flex-col items-center gap-4 mt-0 lg:mt-5' : 'hidden'} lg:flex lg:flex-row gap-4      lg:mt-0 `}>
              <Link to="/admin" className='text-white text-m uppercase font-bold'>Pacientes {''}</Link>
              <Link to="/admin/perfil" className='text-white text-m uppercase font-bold'>Perfil </Link>

              <button type='button' className='text-white text-m uppercase font-bold' onClick={cerrarSesion}>
                Cerrar Sesión
              </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;
import { Outlet, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";

const RutaProtegida = () => {

    const {auth, cargando} = useAuth();

    if (cargando) return 'cargando...'

  return (
    <>
        <Header />  
        {/* si auth tiene el id del usuario muestra nuestras rutas protegidas y si no lo lleva a iniciar sesion */}
        {auth?._id ? ( 
          <main className="container mx-auto mt-10">
            <Outlet />
          </main> 
        )
        : <Navigate to="/" />}
        <Footer />
    </>

  )
}

export default RutaProtegida
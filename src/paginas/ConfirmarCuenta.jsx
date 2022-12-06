import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";

const ConfirmarCuenta = () => {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [alerta, setAlerta] = useState({});

  const params = useParams();
  const {id} = params;


  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `/veterinarios/confirmar/${id}`;
        const {data} = await clienteAxios(url);

        setCuentaConfirmada(true);
        setAlerta({
          msg: data.msg
        });
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
      setCargando(false);
    }
    return () => confirmarCuenta();
  },[])


  return (
    <>
        <div>
          <h1 className="text-indigo-600 font-black text-6xl">
            Confirma tu Cuenta y Comienza a Administrar {""} 
            <span className="text-black">tus Pacientes</span>
          </h1>
        </div>

        <div className="mt-20 md:mt-5 shadow-lg px-5 rounded-xl bg-white" >
          <div className="mt-10 mb-10"> 
            <Alerta 
              alerta={alerta}
            />

            {cuentaConfirmada && (
              <Link to="/" className='text-center my-5 bg-indigo-700 w-full py-3 px-10 rounded-xl text-white
              uppercase font-bold mt-5 mb-10 hover:cursor-pointer hover:bg-indigo-800 md:w-auto'>
                  Iniciar Sesión
              </Link>
            )}
          </div>
        </div>

    </>
  )
}

export default ConfirmarCuenta

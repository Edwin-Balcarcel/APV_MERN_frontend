
const Alerta = ({alerta}) => {

  return (
      <div 
          className={`${alerta.error ? 'from-red-400 to-red-600 text-white' : 'from-green-300 to-green-400 text-gray-700'} 
          bg-gradient-to-r text-center p-3 rounded-xl uppercase font-bold text-sm mb-10`}>
          {alerta.msg}
      </div> 
    
  )
}

export default Alerta
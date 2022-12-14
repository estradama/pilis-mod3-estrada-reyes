import Ubicacion from "./Ubicacion";
import './Ubicaciones.css'

const Ubicaciones= ({ubicaciones}) =>{
 return(
    <div className='grid'>
      {ubicaciones.map((ubicacion) => (
        <Ubicacion key={ubicacion.id} ubicacion={ubicacion} /> 
      ))}
    </div>
 )
}

export default Ubicaciones
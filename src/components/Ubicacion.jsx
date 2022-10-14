import "./Ubicacion.css";
import { FaTrash,FaEdit } from 'react-icons/fa';
import { useContext } from "react";
import { UbicacionContext } from "../contexts/UbicacionContext";

const Ubicacion = ({ ubicacion }) => {
    const { id, name, latitud, longitud, temperature, windSpeed } = ubicacion;
  const { ubicaciones, setUbicaciones } = useContext(UbicacionContext);

  const handleDelete = () => {
    const UbicacionesFiltered = ubicaciones.filter(
      (ubicacion) => ubicacion.id !== id
    );
    setUbicaciones(UbicacionesFiltered);
  };


    return ( 
    <div className="ubicacion-container" key={id}>
    <div className="ubicacion">
      <h3>Lugar: {name}</h3>
      <ul>
        <li>Latitud: {latitud}</li>
        <li>Longuitud:{longitud}</li>
        <li>Temperatura :{temperature} C°</li>
        <li>Velocidad del viento : {windSpeed} km</li>
      </ul>
      
    </div>
    <div className='ubicacion-actions'>
      <div className='fav' onClick={handleDelete}>
          <FaTrash className='heart'/>
      </div> 
    </div>
  </div>
  );

}

export default Ubicacion;
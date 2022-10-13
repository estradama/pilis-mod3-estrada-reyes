import { useContext } from "react";
import "./Home.css";
import Ubicaciones from "../../components/Ubicaciones";
import { UbicacionContext } from "../../contexts/UbicacionContext";

const Home = () => {
  const { ubicaciones } = useContext(UbicacionContext);
  return (
    <div className="main-container">
      <Ubicaciones ubicaciones={ubicaciones} />
    </div>
  );
};

export default Home;

import './style.css'
import { Link } from "react-router-dom";

const Home = () =>{
  return(
    <div className="banner">
      <div className="titulo1">
        <h1>FASHION LIFE</h1>
        <Link to="/novocliente" className="novoCliente"><p>Cadastre-se</p></Link>
        </div>
    </div>
  );
}

export default Home;
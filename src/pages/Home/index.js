import './style.css'
import { Link } from "react-router-dom";

const Home = () =>{
  return(
    <div className="banner">
      <div className="titulo1">
        <h1>FASHION LIFE</h1>
        <Link to="/login" className="novoCliente"><p>ENTRAR</p></Link>
        </div>
    </div>
  );
}

export default Home;
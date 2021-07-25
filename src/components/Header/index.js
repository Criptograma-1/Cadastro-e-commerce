import './style.css';
import { GoSearch } from 'react-icons/go';
import { FaShoppingCart, FaAngleDown } from 'react-icons/fa'
import logo from "../../assets/img/logo.png";

function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="content">
          <div className="border">
            <a href="">WishList
              <span>( 0 )</span>
            </a>
          </div>
          <div>
            <a href="">Comparar
              <span>( 0 )</span>
            </a>
          </div>
        </div>
        <div id="center" className="content">
          <img src={logo} alt="logo" />
        </div>
        <div className="content-last">
          <div className="border">
            <a href=""><GoSearch /></a>
          </div>
          <div className="border">
            <a id="profile" href="">Perfil <FaAngleDown/></a>
            <div className="hidden">
              <a href="/login">Entrar</a>
            </div>
          </div>
          <div>
            <a href=""><FaShoppingCart />
              <span>( 0 )</span>
            </a>
          </div>
        </div>
      </ div>
      <div className="menu">
        <div >
          <a href="/">HOME</a>
          <a href="/produtos">SEUS PRODUTOS</a>
          <a href="/novoproduto">PRODUTOS</a>
          <a href="/cliente">SEUS CLIENTES</a>
          <a href="/novocliente">CLIENTES</a>
        </div>
      </div>
    </ div>
  );
}

export default Header;
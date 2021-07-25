import './style.css';
import { GoSearch } from 'react-icons/go';
import { FaShoppingCart, FaAngleDown } from 'react-icons/fa'

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
          <img src="https://cdn.shopify.com/s/files/1/0035/5673/7059/files/logo_180x.png?v=1612343375" alt="logo" />
        </div>
        <div className="content-last">
          <div className="border">
            <a href=""><GoSearch /></a>
          </div>
          <div className="border">
            <a id="profile" href="">Perfil <FaAngleDown/></a>
            <div className="hidden">
              <a href="/login">Entrar</a>
              <a href="/novocliente">Junte-se</a>
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
          <a href="/produtos">PRODUTOS</a>
          <a href="/novoproduto">CADASTRAR</a>
          <a href="/cliente">CLIENTES</a>
          <a href="/novocliente">JUNTE-SE</a>
        </div>
      </div>
    </ div>
  );
}

export default Header;
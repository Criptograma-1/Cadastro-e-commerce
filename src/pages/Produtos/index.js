import {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LateralCard from "../../components/Lateral";
import {Background ,AsideBar, Main, PageContainer, PageContent, ProductContainer, Products} from "./style";

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  
  function removerProduto(id){
    const newProdutos = produtos.filter(item => item.id !== id);
    setProdutos(newProdutos);
    localStorage.setItem('produtos',JSON.stringify(newProdutos));
  }

  useEffect(()=>{
    const prod = JSON.parse(localStorage.getItem('produtos'));
    if(prod && prod.length > 0){
      setProdutos(prod);
    }
  },[]);

  return(
    <>
<PageContainer>
<Background>   
      <div className="titulo">
        <h1>SEUS PRODUTOS</h1>
        <h3>Home - Seus produtos</h3>
      </div>
    </Background>
  <PageContent>
    <AsideBar>
<LateralCard/>
    </AsideBar>
    <Main>
        <Link to="/novoproduto" className="novoProduto"><p>Cadastrar Produto</p></Link>
           {produtos && produtos.length === 0 ? <div className="alert" style={{display:"block"}}>Ainda não existem produtos Cadastrados.</div> : 
            <ProductContainer>
              {produtos.map(item =>(
                <Products key={item.id}>
                  <div className="img">
                    <a href="">
                      <div className='img-inner'>
                        <img src={item.foto} alt={item.nome} width="200" height="auto" />
                        <span className="span">SALE</span>
                      </div>
                    </a>
                  </div>
                  <div className="info">
                    <h4>{item.nome}</h4>
                    <p className="text">{item.categoria}</p>
                    <p className="text">{item.descricao}</p>
                    <p><small>R$ {item.valorantigo} </small>R$ {item.valor}</p>
                    <p className="text">{item.quantidade} unidades em estoque</p>
                  </div>
                  <div className="remove"><button onClick={()=>{removerProduto(item.id)}}>Remover</button></div>
                </Products>
              ))}  
            </ProductContainer>
            }

      
    </Main>
  </PageContent>
</PageContainer>
      

    </>
  );
}

export default Produtos;
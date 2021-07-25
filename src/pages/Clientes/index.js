import {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LateralProfile from "../../components/LateralProfile";
import {Background ,AsideBar, Main, PageContainer, PageContent, ClientContainer, Clients} from "./style";

function Clientes() {
  const [clientes, setClientes] = useState([]);
  
  function removerCliente(id){
    const newClientes = clientes.filter(item => item.id !== id);
    setClientes(newClientes);
    localStorage.setItem('clientes',JSON.stringify(newClientes));
  }

  useEffect(()=>{
    const client = JSON.parse(localStorage.getItem('clientes'));
    if(client && client.length > 0){
      setClientes(client);
    }
  },[]);

  return(
    <>

<PageContainer>
<Background>   
      <div className="titulo">
        <h1>SEUS CLIENTES</h1>
        <h3>Home - Seus clientes</h3>
      </div>
    </Background>
  <PageContent>
    <AsideBar>
      <LateralProfile />
    </AsideBar>
    <Main>
        <Link to="/novocliente" className="novoCliente"><p>Cadastrar Cliente</p></Link>
        {clientes && clientes.length === 0 ? <div className="alert">Ainda não existem Clientes Cadastrados.</div> :  
            <ClientContainer>
              {clientes.map(item =>(
                <Clients key={item.id}>
                  <ul>
                    <li><img src={item.foto} alt="" width="200px"/></li>
                    <li><p><span>Cliente: </span>{item.nome}</p></li>
                    <li><p><span>E-mail: </span> {item.email}</p></li>
                    <li><p><span>Telefone: </span> {item.telefone}</p></li>
                    <li><p><span>Endereço: </span> {item.endereco}</p></li>
                  </ul>
                  <div className="remove">
                    <button onClick={()=>{removerCliente(item.id)}}>Remover</button>
                  </div>
                </Clients>
              ))}  
            </ClientContainer>
            }

      
    </Main>
  </PageContent>
</PageContainer>
    </>
  );
}

export default Clientes;
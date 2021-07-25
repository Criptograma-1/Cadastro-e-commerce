import './style.css';
import React, {useState, useEffect } from "react";
import {useHistory} from "react-router-dom";

  
function CadastroCliente() {

  const history = useHistory();
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [foto, setFoto] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
 
  function handleForm(e){
    e.preventDefault();
    const cliente = {
      id: clientes.length + 1,
      nome: nome,
      email: email,
      foto: foto,
      telefone: telefone,
      endereco: endereco
    }
    const newClientes = [...clientes, cliente];
    setClientes(newClientes);
    setTimeout(()=>{
      history.push("/cliente");
    }, 500);
  }

  useEffect(()=>{
    if(clientes.length > 0){
      localStorage.setItem('clientes',JSON.stringify(clientes));
    }
  },[clientes]);

  useEffect(()=>{
    const client = JSON.parse(localStorage.getItem('clientes'));
    if(client && client.length > 0){
      setClientes(client);
    }
  },[]);


  return (
    <>
    <div className="Background">
    <div className="titulo">
        <h1>CLIENTES</h1>
        <h3>Home - Clientes</h3>
      </div>
    </div>
            <div className="form">
              <div className="title">
                <h3>CADASTRE SEUS CLIENTES</h3>
              </div>
              <form id="form" onSubmit={handleForm}>
                <label htmlFor="name">NOME:</label>
                <input 
                  type="text" name="name" id="name" 
                  value={nome} 
                  onChange={e => setNome(e.target.value)}  
                  placeholder="Digite seu nome" 
                />
                <label htmlFor="foto">FOTO:</label>
                <input 
                  type="text" name="foto" id="foto" 
                  value={foto} 
                  onChange={e => setFoto(e.target.value)}  
                  placeholder="https://" 
                />
                
                <label htmlFor="email">EMAIL:</label>
                <input 
                  type="email" name="email" id="email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)}  
                  placeholder="Digite seu email"
                />

                <label htmlFor="telefone">Telefone:</label>
                <input 
                  type="telefone" name="telefone" id="telefone" 
                  value={telefone} 
                  onChange={e => setTelefone(e.target.value)}  
                  placeholder="Digite seu telefone"
                />
                
                <label htmlFor="endereco">ENDEREÇO:</label>
                <input 
                  type="text" name="endereco" id="endereco" 
                  value={endereco} 
                  onChange={e => setEndereco(e.target.value)}  
                  placeholder="Digite seu endereço" />
                
                <button type="submit" >CADASTRAR</button>
              </form>
            </div>
            </>
  );
}

export default CadastroCliente;
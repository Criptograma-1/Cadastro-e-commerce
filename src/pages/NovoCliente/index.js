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
 
  function handleForm(e){
    e.preventDefault();
    const cliente = {
      id: clientes.length + 1,
      nome: nome,
      email: email,
      senha: senha,
      foto: foto,
      telefone: telefone
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
        <h1>JUNTE-SE</h1>
        <h3>Home - Junte-se</h3>
      </div>
    </div>
            <div className="form">
              <div className="title">
                <h3>SEUS DADOS</h3>
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
                
                <label htmlFor="password">SENHA:</label>
                <input 
                  type="password" name="password" id="password" 
                  value={senha} 
                  onChange={e => setSenha(e.target.value)}  
                  placeholder="Digite sua senha" />
                
                <button type="submit" >CADASTRAR</button>
              </form>
            </div>
            </>
  );
}

export default CadastroCliente;
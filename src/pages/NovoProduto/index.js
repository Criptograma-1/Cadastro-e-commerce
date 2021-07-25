import React, {useState, useEffect } from "react";
import {useHistory} from "react-router-dom";

import {Background, Formulario} from './style';

export default function NovoProduto() {
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('Tecnologia');
  const [valor, setValor] = useState(0);
  const [valorantigo, setValorantigo] = useState(0);
  const [quantidade, setQuantidade] = useState(0);
  const [descricao, setDescricao] = useState('');
  const [foto, setFoto] = useState('');

  const history = useHistory();

  function handleForm(e){
    e.preventDefault();
    const produto = {
      id: produtos.length + 1,
      foto: foto,
      nome: nome,
      categoria: categoria,
      valor: valor,
      valorantigo: valorantigo,
      quantidade: quantidade,
      descricao: descricao,
    };
    const newProdutos = [...produtos, produto];
    setProdutos(newProdutos);
    setTimeout(()=>{
      history.push("/produtos");
    }, 500);
   
  }

  useEffect(()=>{
    if(produtos.length > 0){
      localStorage.setItem('produtos',JSON.stringify(produtos));
    }
  },[produtos]);

  useEffect(()=>{
    const prod = JSON.parse(localStorage.getItem('produtos'));
    if(prod && prod.length > 0){
      setProdutos(prod);
    }
  },[]);

  return (
    <>
    <Background>   
      <div className="titulo">
        <h1>PRODUTOS</h1>
        <h3>Home - Produtos</h3>
      </div>
    </Background>
      <Formulario>
        <h3>CADASTRE SEUS PRODUTOS</h3>
          <form onSubmit={handleForm}>
              <label htmlFor="nome">Nome: </label>
              <input type="text" id="nome" 
                value={nome} 
                onChange={e => setNome(e.target.value)} 
                placeholder="Blusa" 
                required
              />
              <label htmlFor="foto">Foto url: </label>
              <input type="text" id="foto" 
                value={foto} 
                onChange={e => setFoto(e.target.value)} 
                placeholder="https://" 
                required
              />
                <label htmlFor="categoria">Categoria: </label>
                <select id="categoria" value={categoria} onChange={e => setCategoria(e.target.value)} >
                  <option value="Masculino">Masculino</option>
                  <option value="Feminina">Feminina</option>
                  <option value="Infantil">Infantil</option>
                </select>
                <label htmlFor="valorantigo">Preço anterior: </label>
                <input type="number" id="valorantigo" value={valorantigo} 
                  onChange={e => setValorantigo(e.target.value)} 
                  required 
                />
                <label htmlFor="valor">Preço Atual: </label>
                <input type="number" id="valor" value={valor} 
                  onChange={e => setValor(e.target.value)} 
                  required 
                />
                <label htmlFor="quantidade">Quantidade: </label>
                <input type="number" id="valor" 
                  value={quantidade} 
                  onChange={e => setQuantidade(e.target.value)} 
                  required
                />

                <label htmlFor="descricao">Descricao: </label>
                <textarea id="descricao" rows="5" placeholder="Lorem Ipsum sit dolor et amet"
                  onChange={e => setDescricao(e.target.value)} value={descricao}
                  required
                ></textarea>
              <button type="submit">Finalizar Cadastro</button>
          </form>
      </Formulario>
    </>
  );
}
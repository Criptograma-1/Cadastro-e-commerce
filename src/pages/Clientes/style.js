import styled from "styled-components";


export const PageContainer = styled.div`
width: 100%;
margin: 0 auto 0;
`
export const PageContent = styled.div`
  margin: 0 auto;
  display: flex;
`
export const Main = styled.div`
  width: 100%;
  flex: 3 0px;
  margin-top:15px;

  .novoCliente{
    display: flex;
    width: 150px;
    height: 30px;
    background-color: #e51a73;
    padding: 10px;
    justify-content:center;
    align-items:center;
    border-radius: 5px;
  }
  .novoCliente:hover{
    background-color: #ffeb28;
    p{
      color: #222;
    }
  }
  .novoCliente p{
    color: #fff;
    font-size: 18px;
  }
`

export const Background = styled.div`
@font-face {
  font-family: 'Poppins', sans-serif;
  src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;900&display=swap')
}

  font-family: 'Poppins', sans-serif;
  background-image: url('https://images.pexels.com/photos/768975/pexels-photo-768975.jpeg');
  padding: 60px 0;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  width: 100%;
  display: flex;
  color: #333;
  a{
    color: #333;
    text-decoration: none;
  }
  .titulo{
    width: 50%;
    margin: auto;
    text-align: center;
  }
  h1{
    margin:0;
  }
`

export const AsideBar = styled.div`
  flex: 1 0px;
`
export const ClientContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  display: flex;
  width: 100%; 
  flex-wrap: wrap;


`
export const Clients = styled.div`
  display: flex;  
  flex-direction: column;
  height: 100%;
  align-items: center;
  padding: 10px;
 
ul{
  list-style-type: none;
}
  button{
    background-color: #e51a73;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
  }
  button:hover {
    background-color: #ffeb28;
    color: #222;
  }
  }
`
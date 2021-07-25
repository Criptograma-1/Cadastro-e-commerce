import styled from "styled-components";

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
export const Formulario = styled.div`
  width: 50%;
  margin: auto;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 20px;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 8%);

  form {
    display:flex;
    flex-direction: column;
    align-items: center;
    width:50%;
    margin: auto;
  }
  input, select, textarea {
    height: 40px;
    width: 100%;
    margin: 5px 0px;
    border: 1px solid #eee;
    border-radius: 0px;
    font-size: 12px;
    font-weight: 200;
    padding-left: 10px;
    color: #999;
    }
    button {
      border: 1px solid #e51a73;
      background-color: #e51a73;
      color: #fff;
      font-size: 18px;
      font-weight: 400;
      width:50%;
      line-height: 22px;
      margin: 5px 0px;
      height: 40px;
      cursor: pointer;
    }
    button:hover {
    background-color: #ffeb28;
    color: #232323;
    border: 1px solid #ffeb28;
    }
    h3 {
      font-family: 'Poppins', sans-serif;
      font-size: 18px!important;
      font-weight: 500!important;
      color: #232323!important;
    }
`
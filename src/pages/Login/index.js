import './style.css';

function Login() {
  return (
            <div className="form">
              <div className="title">
                <h3>LOGIN</h3>
              </div>
              <form id="form" action="/clientes" method="POST">
                <input type="email" name="email" id="email" placeholder="Digite seu email"/>
                <input type="password" name="password" id="password" placeholder="Digite sua senha" />
                <a href="">Esqueceu sua senha?</a>
                <button type="submit" >ENTRAR</button>
              </form>
              <div className="notReg"><p>Novo por aqui? <a href="">crie uma conta</a></p></div>
            </div>
  );
}

export default Login;
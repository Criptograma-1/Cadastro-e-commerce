import React from "react";
import { Switch, Route,  BrowserRouter,  } from "react-router-dom";
import NovoCliente from './pages/NovoCliente';
import Home from "./pages/Home";
import Clientes from "./pages/Clientes";
import Login from "./pages/Login"
import Produtos from "./pages/Produtos";
import NovoProduto from "./pages/NovoProduto";

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/novocliente" exact component={NovoCliente} />
        <Route path="/novoproduto" exact component={NovoProduto} />
        <Route path="/produtos" exact component={Produtos} />
        <Route path="/login" exact component={Login} />
        <Route path="/cliente" exact component={Clientes} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
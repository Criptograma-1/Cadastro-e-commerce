import { Container, Title } from "./style";
import profile from "../../assets/img/profile.png"

function LateralProfile() {
  return (
    <Container>
      <Title>
        <h3>Profile</h3>
      </Title>
      <div>
          <p className="title">Olá, vendedor(a)</p>
          <div className="checkbox">
              <img src={profile} alt="foto" width="200px"/>
          </div>

          <p className="title">Andresa Cristina</p>
          <p className="subtitle">Bem vindo(a) a sua página de clientes</p>
        </div>
    </ Container>
  );
}

export default LateralProfile;
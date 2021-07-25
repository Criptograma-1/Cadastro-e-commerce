import { Container, Title } from "./style";


function LateralProfile() {
  return (
    <Container>
      <Title>
        <h3>Profile</h3>
      </Title>
      <div>
          <p className="title">Bem vindo(a)</p>
          <div className="checkbox">
              <img src="https://cdn.shopify.com/s/files/1/0271/0536/1973/files/G4_600x600.png" alt="foto" width="200px"/>
          </div>

          <p className="title">Andresa Cristina</p>
        </div>
    </ Container>
  );
}

export default LateralProfile;
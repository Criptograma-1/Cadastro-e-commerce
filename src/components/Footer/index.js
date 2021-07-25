import './style.css';
import { FaMapMarkerAlt, FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { AiTwotonePhone, AiTwotoneMail } from 'react-icons/ai';
import { RiSendPlaneFill } from 'react-icons/ri';

import logo from "../../assets/img/logo.png";
import footer1 from "../../assets/img/footer1.jfif"
import footer2 from "../../assets/img/footer2.jfif"
import footer3 from "../../assets/img/footer3.jfif"
import footer4 from "../../assets/img/footer4.jfif"

function Footer() {
  return (
    <div className="container">
      <div className="section">
        <div className="description">
          <img src={logo} width="150px" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusamus neque tempora, labore cupiditate, assumenda animi voluptatum
            consequuntur sed et corrupti inventore pariatur quam aliquam expedita
            ipsa laudantium sint minus. Non.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="subsection">
          <h3>NOSSAS LOJAS</h3>
          <div>
            <button className="icon"><FaMapMarkerAlt /></button>
            <p>4005, Silver business point
              India</p>
          </div>
          <div>
            <button className="icon"><AiTwotonePhone /></button>
            <p>+00 900 123456789</p>
          </div>
          <div>
            <button className="icon"><AiTwotoneMail /></button>
            <p>info@gmail.com</p>
          </div>
        </div>
        <div className="subsection">
          <h3 style={{ textAlign: "center" }}>NOSSA GALERIA</h3>
          <div>
            <img width="100px" src={footer1} alt="" />
            <img width="100px" src={footer2} alt="" />
            <img width="100px" src={footer3} alt="" />
            <img width="100px" src={footer4} alt="" />
          </div>
        </div>
        <div className="subsection">
          <h3>INSCREVA-SE</h3>
          <section>
            <div>
              <p>Fique atualizado sobre tudo o que há de novo</p>
            </div>
            <div>
              <input type="email" placeholder="Digite seu email" />
              <button className="button"><RiSendPlaneFill /></button>
            </div>
            <div>
              <button className="socialIcon"><FaFacebookSquare /></button>
              <button className="socialIcon"><FaInstagram /></button>
              <button className="socialIcon"><FaLinkedin /></button>
              <button className="socialIcon"><FaTwitter /></button>
            </div>
          </section>

        </div>
      </div>

      <div className="section">
        <div className="author">
          <div><p>© 2021 - Todos os direitos reservados</p></div>
        </div>

      </div>

    </div>
  );
}

export default Footer;
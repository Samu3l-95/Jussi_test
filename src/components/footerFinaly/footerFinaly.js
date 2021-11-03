import { Col, Container, Row } from "react-bootstrap";
import "./Style.css";
import WppCompany from "../../assets/images/wppcompany.png";
import Facebook from "../../assets/images/facebook.png";
import Instagram from "../../assets/images/instagram.png";
import Linkedin from "../../assets/images/linkedin.png";

const FooterFinaly = () => {
  return (
    <Container>
      <Row className="copyright">
        <Col className="pull-left" style={{display:"flex"}}>
          <img src={WppCompany} alt="Wpp Company" />
        </Col>
        <Col className="pull-right">
          <ul className="social-media">
            <li>
              <a href="https://facebook.com">
                <img src={Facebook} alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <img src={Instagram} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com">
                <img src={Linkedin} alt="Linkedin" />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterFinaly;

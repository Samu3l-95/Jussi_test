import { Container, Row, Col } from "react-bootstrap";
import "./Style.css";

const ComercialContact = () => {
  return (
    <Container className="contact">
      <Row>
        <Col>
          <h2 style={{ color: "white" }}>
            Essa loja foi construída usando uma das nossas soluções da
            plataforma VTEX. tenha a sua.
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5 style={{ color: "white" }}>Entre em contato</h5>
          <h4>
            <a href="mailto:comercial@jussi.com.br">comercial@jussi.com.br</a>
          </h4>
        </Col>
      </Row>
    </Container>
  );
};
export default ComercialContact;

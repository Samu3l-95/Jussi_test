import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "./Style.css";

const FooterContact = () => {
  return (
    <Container className="contactEmail">
      <Row>
        <Col>
          <h2 style={{ color: "white" }}>
            receba novidades da nossa área de produtos digitais.
          </h2>
        </Col>
      </Row>
      <Row style={{ marginTop: 50 }}>
        <Col
          span={2}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <InputGroup className="InputMb3">
            <FormControl
              placeholder="Digite seu e-mail"
              className="InputText"
            />

            <Button className="buttonEmail" variant="outline-secondary">
              CADASTRAR
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default FooterContact;

import { Col, Image, Row } from "antd";
import { Card, Button, Container } from "react-bootstrap";
import "./Style.css";
import Batedeira from "../../../assets/images/batedeira.png";
import Geladeira from "../../../assets/images/geladeira.png";
import Bebida from "../../../assets/images/bebida.png";
import { useEffect, useState } from "react";

const BannerProducts = () => {
  const [widthScreen, setWidthScreen] = useState(window.screen.width);

  return (
    <Container className="banner">
      <Row>
        <Col>
          <div className="slogan">
            <div className="aspas">{/* <img src={Aspas} alt="Aspas" /> */}</div>
            <div className="content" style={{ textAlign: "initial" }}>
              <h1>Criamos lojas que vendem mais.</h1>
              <h2>
                A Jüssi é especialista na criação de lojas usando a plataforma
                VTEX. Precisa criar sua loja ou migrar de plataforma?
              </h2>
              <Button variant="outline-secondary" size="lg">
                Veja nossas soluções
              </Button>
            </div>
          </div>
        </Col>
        <Col className="cards">
          <div className="card-item-1">
            <div className="content">
              <img src={Batedeira} alt="Batedeira" />
              <Button variant="outline-danger">Comprar em 12x</Button>
            </div>
          </div>
          <div className="card-item-2">
            <div className="content">
              <img src={Geladeira} alt="Geladeira" />
              <Button variant="outline-danger">Mais Detalhes</Button>
            </div>
          </div>
          <div className="card-item-3">
            <div className="content">
              <img src={Bebida} alt="Bebida" />
              <Button variant="outline-danger">Adicionar à sacola</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BannerProducts;

import {
  Container,
  Form,
  FormControl,
  Navbar,
  Nav,
  Image,
  Row,
  ListGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./Style.css";
import Logo from "../../assets/logoJussiVectorGreen.png";
import Carrinho from "../../assets/carrinho.png";
import { Col } from "antd";
import { Search } from "../../service/search/Api";
import { useEffect, useState } from "react";

const HeaderPage = () => {
  const [search, setSearch] = useState("");
  const [handleChange, setHandleChange] = useState("");
  const [noOfElement, setNoOfElement] = useState(4);

  const slice = search.slice(0, noOfElement);

  useEffect(() => {
    Search(handleChange).then((res) => {
      setSearch(res?.data);
    });
  }, [handleChange]);

  return (
    <Row>
      <Col span={24}>
        <Navbar bg="white" expand="lg">
          <Container fluid>
            <Col span={1}></Col>
            <Image src={Logo} alt="logo" />
            <Col span={2}></Col>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1" className="headerLinks">
                  Nossas soluções
                </Nav.Link>
                <Nav.Link href="#action2" className="headerLinks">
                  Conheça a Jüssi
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  value={handleChange}
                  onChange={(res) => setHandleChange(res.target.value)}
                  type="search"
                  placeholder="Buscar"
                  className="me-2"
                  aria-label="Search"
                />
                <Nav.Link href="#action1" className="headerLinks">
                  Login
                </Nav.Link>
                <Image src={Carrinho} alt="Carrinho" className="Carrinho" />
              </Form>
              <Col span={1}></Col>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
      {search.length > 0 ? (
        <Row style={{ position: "absolute", marginTop: 50 }}>
          {slice.map((anime) => (
            <Row
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <Col span={4}>
                <ListGroup defaultActiveKey="#link1">
                  <ListGroup.Item action href="#link1">
                    <img
                      src={anime?.attributes?.posterImage?.small}
                      style={{ height: 60 }}
                      alt="img"
                    />
                    {anime?.attributes?.canonicalTitle}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col span={1}></Col>
            </Row>
          ))}
        </Row>
      ) : null}
    </Row>
  );
};

export default HeaderPage;

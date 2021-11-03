import "./Style.css";
import "antd/dist/antd.css";
import HeaderPage from "../../components/Navbar/Header";
import BannerProducts from "../../components/Navbar/banner/Banner";
import { Container, Row, Col } from "react-bootstrap";
import ContentBrands from "../../components/Navbar/contentBrands/ContentBrands";
import OurSolutions from "../../components/Navbar/ourSolutions/OurSolutions";
import AboutComponent from "../../components/Navbar/AboutComponent/AboutComponent";
import ComercialContact from "../../components/Navbar/comercialContact/ComercialContact";
import FooterContact from "../../components/footerComponent/FooterContact";
import FooterFinaly from "../../components/footerFinaly/footerFinaly";

const Page = () => {
  return (
    <Container fluid className="landing-page">
      <header>
        <HeaderPage />
      </header>
      <main>
        <section>
          <Row className="big-banner">
            <Col>
              <BannerProducts />
            </Col>
          </Row>
        </section>
        <section>
          <Row className="brands">
            <Col>
              <ContentBrands />
            </Col>
          </Row>
        </section>
        <section>
          <Row className="solutions">
            <Col>
              <OurSolutions />
            </Col>
          </Row>
        </section>
        <section>
          <Row className="about-us">
            <Col>
              <AboutComponent />
            </Col>
          </Row>
        </section>
        <section>
          <Row className="contact-us">
            <Col>
              <ComercialContact />
            </Col>
          </Row>
        </section>
        <section>
          <Row className="comercialFooter">
            <Col>
              <FooterContact />
            </Col>
          </Row>
        </section>
      </main>
      <footer>
        <Row className="comercialFooter">
          <Col>
            <FooterFinaly />
          </Col>
        </Row>
      </footer>
    </Container>
  );
};

export default Page;

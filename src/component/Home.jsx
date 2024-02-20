import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import Products from "./Products";
import Zara from "./Zara";
import TopFooter from "./TopFooter";
import BottomFooter from "./BottomFooter";

const Home = () => {
  return (
    <div className="hero">
      <Container fluid className="bgcolor">
        <Container className="pb-5">
          <Row className="justify-content-between align-items-center pb-5 pt-5">
            <Col xs={12} xl={7} md={4} className="text-bg-black pad">
              <h4 className="collection-title">Collections</h4>
              <p className="collection-description">
                You can Explore And Shop Many Different Collections. From
                Various Brands Here
              </p>
              <Button className="shop_button">
                <FontAwesomeIcon icon={faShopify} className="shop_icon" />
                <span className="ms-2 shop_icon">Shop Now</span>
              </Button>
            </Col>
            <Col xs={12} xl={4} md={6}>
              <img
                src="/images/image-product.png"
                className="card-img"
                alt="Background"
                height="auto"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Products />
      <Zara />
      <TopFooter />
      <BottomFooter />
    </div>
  );
};

export default Home;

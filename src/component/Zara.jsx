import React from "react";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Zara = () => {
  return (
    <Container className="bgImage">
      <div className="d-flex">
        <div className="col-md-4">Hello</div>
        <div className="d-flex column col-md-8 justify-content-right">
          <div>
            <img src="/images/1024px-Zara_Logo 2.png" alt="Logo" />
          </div>
          <div className="description">
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </div>
          <div>
            <Button className="shop_button">
              <span className="ms-2 shop_icon">Shop Now</span>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Zara;

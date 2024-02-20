import React from "react";
import { Button } from "react-bootstrap";

const Zara = () => {
  return (
    <div className="bgImage container-fluid pe-lg-5">
      <div className="mt-lg-5">
        <div className="col-md-10 col-lg-5 ms-auto pb-4">
          <img src="/images/1024px-Zara_Logo 2.png" alt="Logo" />
        </div>
        <div className="description col-md-10 col-lg-5 ms-auto text-white">
          Lustrous yet understated. The new evening wear collection
          exclusively offered at the reopened Giorgio Armani boutique in Los
          Angeles.
        </div>
        <div className="col-md-10 col-lg-5 ms-auto">
          <Button className="collection_button">
            <span className="ms-2 shop_icon">See Collection</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Zara;

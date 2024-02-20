import React from "react";
import { Container } from "react-bootstrap";

const TopFooter = () => {
    return (
        <Container>
            <div className="row mt-5 d-flex justify-content-center">
                <div className="col-md-4 height">
                    <img src="/images/logo.png" alt="Logo" />
                    <p className="lh-lg">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua</p>
                    <div className="socialmedia">
                        <a href="https://www.facebook.com"><img src="/images/facebook.png"></img></a>
                        <a href="https://www.twitter.com"><img src="/images/twitter.png"></img></a>
                        <a href="https://www.linkedin.com/"><img src="/images/linkedin.png"></img></a>
                        <a href="https://www.dribble.com"><img src="/images/dribbble.png"></img></a>
                    </div>
                </div>
                <div className="col-md-3 top_footer">
                    <ul>
                        <h5>CATALOG</h5>
                        <li><a href="#">Necklaces</a></li>
                        <li><a href="#">hoodies</a></li>
                        <li><a href="#">Jewelry Box</a></li>
                        <li><a href="#">t-shirt</a></li>
                        <li><a href="#">jacket</a></li>
                    </ul>
                </div>
                <div className="col-md-3 top_footer">
                    <ul>
                        <h5>ABOUT US</h5>
                        <li><a href="#">Our Producers</a></li>
                        <li><a href="#">Sitemap</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="col-md-3 top_footer">
                    <h5 className="text-center">CUSTOMER SERVICES</h5>
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Track Your Order</a></li>
                        <li><a href="#">Product Care & Repair</a></li>
                        <li><a href="#">Book an Appointment</a></li>
                        <li><a href="#">Shipping & Returns</a></li>
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default TopFooter;

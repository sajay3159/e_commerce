import React from "react";
import { Container } from "react-bootstrap";

const TopFooter = () => {
    const catalogItems = ["Necklaces", "Hoodies", "Jewelry Box", "T-shirt", "Jacket"];
    const aboutUsItems = ["Our Producers", "Sitemap", "FAQ", "About Us", "Terms & Conditions"];
    const customerServicesItems = ["Contact Us", "Track Your Order", "Product Care & Repair", "Book an Appointment", "Shipping & Returns"];

    return (
        <Container>
            <div className="row mt-5 justify-content-between mb-5">
                <div className=" my-4 my-md-0 col-12 col-md-2 col-xl-3">
                    <img className="mb-3" src="/images/logo.png" alt="Logo" />
                    <p className="description-footer">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua</p>
                    <div className="socialmedia">
                        <a href="https://www.facebook.com"><img src="/images/facebook.png" alt="Facebook" /></a>
                        <a href="https://www.twitter.com"><img src="/images/twitter.png" alt="Twitter" /></a>
                        <a href="https://www.linkedin.com/"><img src="/images/linkedin.png" alt="LinkedIn" /></a>
                        <a href="https://www.dribble.com"><img src="/images/dribbble.png" alt="Dribbble" /></a>
                    </div>
                </div>
                <div className="col-6 col-md-2 col-xl-3 top_footer">
                    <ul>
                        <h5>CATALOG</h5>
                        {catalogItems.map((item, index) => (
                            <li key={index}><a href="#">{item}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="col-6 col-md-2 col-xl-3 top_footer">
                    <ul>
                        <h5>ABOUT US</h5>
                        {aboutUsItems.map((item, index) => (
                            <li key={index}><a href="#">{item}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="col-12 col-md-2 col-xl-3 top_footer">
                    <ul>
                        <h5 >CUSTOMER SERVICES</h5>

                        {customerServicesItems.map((item, index) => (
                            <li key={index}><a href="#">{item}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default TopFooter;

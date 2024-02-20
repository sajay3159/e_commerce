import React from 'react';
import { Container } from 'react-bootstrap';

const BottomFooter = () => {
    return (
        <Container fluid className='d-flex justify-content-around align-items-center bottomfooter py-2'>
            <div className='text-white'>© 2022 Coral , Inc.</div>
            <div><img src="/images/icons_payment 1.png" alt="card" /></div>
            <div className='text-white'>
                <span className='d-none d-md-inline-block' style={{ marginRight: '10px' }}>Scroll to top </span>
                <img src="/images/Vector 9.png" alt="Up arrow" />
            </div>
        </Container>
    );
};

export default BottomFooter;

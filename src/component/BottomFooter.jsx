import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const BottomFooter = () => {
    return (
        <Container fluid className='bottomfooter py-2'>
            <Row className='justify-content-around align-items-center'>
                <Col xs={12} md='auto' className='text-center text-md-start'>
                    <div className='text-white'>© 2022 Coral , Inc.</div>
                </Col>
                <Col xs={12} md='auto' className='text-center'>
                    <img src="/images/icons_payment 1.png" alt="card" />
                </Col>
                <Col xs={12} md='auto' className='text-center text-md-end'>
                    <div className='text-white'>
                        <span className='d-none d-md-inline-block' style={{ marginRight: '10px' }}>Scroll to top </span>
                        <img src="/images/Vector 9.png" alt="Up arrow" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default BottomFooter;

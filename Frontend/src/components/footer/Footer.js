import React from "react";
import {Container, Col, Row} from 'react-bootstrap';
import './Footer.scss';

export default function Footer() {
    return(
        <footer>
            <Container>
                <Row>
                    <Col md={3}>
                        <img src="/images/icons/TechZone.svg" alt="Brand icon" />

                    </Col>
                    <Col md={3}>
                        <h5>Інформація</h5>
                        <p>Про нас</p>
                        <p>Співпраця</p>
                        <p>Обмін та повернення</p>
                        <p>Зворотній зв'язок</p>
                        <p>Політика конфіденційності</p>
                    </Col>
                    <Col md={3}>
                        <h5>Для клієнта</h5>
                        <p>Каталог</p>
                        <p>Акції</p>
                        <p>Магазини</p>
                        <p>Доставка і оплата</p>
                        <p>Оплата частинами</p>
                    </Col>
                    <Col md={3}>
                        <div className="contact">
                            <img src="/images/icons/call.svg" alt="call" />  
                            <a>+ 38 (093) 227 44 65</a>    
                        </div>
                        <div className="contact">
                            <img src="/images/icons/call.svg" alt="call" />  
                            <a>+ 38 (093) 227 44 65</a>    
                        </div>
                        <div className="contact">
                            <img src="/images/icons/Vector.svg" alt="email" />  
                            <a href="mailto:techzone@gmail.com">techzone@gmail.com</a>    
                        </div>
                    </Col>
                </Row>
                <Row className="bottom">
                    <Col md={6}>
                        <p style={{ fontSize: '14px' }}>2023 &copy; всі права захищені</p>
                    </Col>
                    <Col md={6}>
                        <img src="/images/icons/payment.svg" alt="payment" />
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
import React from "react";
import { Container, Row, Col, Tab, Nav, Form, FormGroup, FormCheck } from "react-bootstrap";
import CartItem from "../CartPage/CartItem";
import {AuthWindow} from '../../components/AuthWindow/AuthWindow';
import './OrderPage.scss';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

export default function OrderPage() {
    const items = useSelector((state) => state.cart.items);
    const count = items.length;

    return(
        <div className="order-page">
            <Helmet>
                <title>TechZone - order page</title>
            </Helmet>
            <header>
                <NavLink to="/">
                    <img alt="logo" src="/images/icons/TechZoneDark.svg"/>
                    <hr /> 
                </NavLink>
            </header>
            <Container>
                <Row>
                    <Col md={8}>
                        <h2>Оформлення замовлення</h2>
                        <h3>Ваше замовлення</h3>
                        <NavLink to="/cart">
                            <button className="edit"><img src="/images/icons/edit.svg" alt="edit changes" />Редагувати</button>
                        </NavLink>
                        {items && items.map((item) => (
                            <CartItem mutability={false} slug={item.slug}/>
                        ))}
                        <div className="contact-info">
                            <h5>1. Ваші контактні дані</h5>
                            <div className="warning">
                                <p>Увага! Отримання замовлення за паспортом. Введіть прізвище, ім'я, по батькові як зазначено<br /> у документі та мобільний номер телефону отримувача замовлення</p>
                            </div>
                            <Tab.Container defaultActiveKey="first">
                                <Row>
                                    <Col>
                                    <Nav variant="pills" className="flex">
                                        <Nav.Item>
                                        <Nav.Link eventKey="first">Я новий покупець</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <Nav.Link eventKey="second">Я постійний покупець</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <form className="new-client">   
                                                <div>
                                                    <label htmlFor="lastName" >Прізвище</label>
                                                    <input id="lastName" type="text" placeholder="Прізвище"/>
                                                </div> 
                                                <div>
                                                    <label htmlFor="firstName">Ім'я</label>
                                                    <input id="firstName" type="text" placeholder="Ім'я"/>
                                                </div>
                                                <div>
                                                    <label htmlFor="phoneNumber">Номер телефону</label>
                                                    <input id="phoneNumber" type="tel" placeholder="+38-0XX-XXX-XX-XX" />
                                                </div>
                                                <div>
                                                    <label htmlFor="email">E-mail</label>
                                                    <input id="email" type="email" placeholder="example@go.com" />
                                                </div>
                                            </form>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <AuthWindow />
                                        </Tab.Pane>
                                    </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </div>
                        <div className="delivery">
                    <h5>2. Доставка</h5>
                    <Form>
                        <FormGroup>
                        <FormCheck
                            type="radio"
                            name="delivery"
                            className="custom-radio"
                            id="deliveryChoice1"
                            value="Самовивіз із наших магазинів"
                            label="Самовивіз із наших магазинів"
                            checked
                        />
                        <FormCheck
                            type="radio"
                            name="delivery"
                            className="custom-radio"
                            id="deliveryChoice2"
                            value="Кур’єр на вашу адресу"
                            label="Кур’єр на вашу адресу"
                        />
                        <FormCheck
                            type="radio"
                            name="delivery"
                            className="custom-radio"
                            id="deliveryChoice3"
                            value="Самовивіз із мобільних точок"
                            label="Самовивіз із мобільних точок"
                        />
                        <FormCheck
                            type="radio"
                            name="delivery"
                            className="custom-radio"
                            id="deliveryChoice4"
                            value="Доставка на пошту"
                            label="Доставка на пошту"
                        />
                        </FormGroup>
                    </Form>
                    </div>
                    <div className="pay">
                    <h5>3. Оплата</h5>
                    <Form>
                        <FormGroup>
                        <FormCheck
                            type="radio"
                            name="paymentMethod"
                            className="custom-radio"
                            id="paymentChoice1"
                            value="Оплата під час отримання товару"
                            label="Оплата під час отримання товару"
                            checked
                        />
                        <FormCheck
                            type="radio"
                            name="paymentMethod"
                            className="custom-radio"
                            id="paymentChoice2"
                            value="-5% знижки при оплаті від 500 грн карткою Mastercard Універсальна/Універсальна Gold від ПриватБанк"
                            label="-5% знижки при оплаті від 500 грн карткою Mastercard Універсальна/Універсальна Gold від ПриватБанк"
                        />
                        <FormCheck
                            type="radio"
                            name="paymentMethod"
                            className="custom-radio"
                            id="paymentChoice3"
                            value="Оплатити онлайн соціальною картою Пакунок малюка"
                            label='Оплатити онлайн соціальною картою "Пакунок малюка"'
                        />
                        <FormCheck
                            type="radio"
                            name="paymentMethod"
                            className="custom-radio"
                            id="paymentChoice4"
                            value="Безготівковий для фізичних осіб"
                            label="Безготівковий для фізичних осіб"
                        />
                        <FormCheck
                            type="radio"
                            name="paymentMethod"
                            className="custom-radio"
                            id="paymentChoice5"
                            value="Кредит та оплата частинами"
                            label="Кредит та оплата частинами"
                        />
                        </FormGroup>
                    </Form>
                    </div>
                    </Col>
                    <Col md={3}>
                        <form className="promocode">
                            <label>Промокод</label>
                            <input />
                        </form>
                        <div className="total">
                            <h2>Разом</h2>
                            <div className="sum-count">
                                <p>{count} товар на суму</p>
                                <p>Безкоштовно</p>
                            </div>
                            <div className="delivery-price">
                                <p>Доставка</p>
                                <p>Безкоштовно</p>
                            </div>
                            <hr />
                            <div className="total-price">
                                <p>До сплати</p>
                                <p>Безкоштовно</p>
                            </div>
                            <button id="confirm" onClick={() => alert("Замовлення оформлене")}>Підтвердити</button>
                            <p id="condition">Підтверджуючи замовлення, я приймаю умови:
                                <li>положення про обробку і захист персональних даних</li>
                                <li>угоди користувача</li>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <footer>
                <hr />
                <p>2023 © всі права захищені</p>
            </footer>
        </div>
    );
}
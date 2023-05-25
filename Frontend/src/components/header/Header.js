import React from "react";
import './Header.scss';
import {Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Catalog from "../catalog/Catalog";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const selectAccessToken = state => !!state.auth.accessToken;

export default function Header() {
	const isAuthenticated = useSelector(selectAccessToken);

    return(
        <header>
            <div className="banner">
                <p>Шалені знижки до -70% на техніку та гаджети – не пропусти!</p>
            </div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/">
                            <img src="/images/icons/TechZoneDark.svg"/>
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Акції</Nav.Link>
                        <Nav.Link href="#link">Магазини</Nav.Link>
                        <Nav.Link href="#home">Доставка і оплата</Nav.Link>
                        <Nav.Link href="#home">Оплата частинами</Nav.Link>
                        <NavDropdown title="Зв'затись з нами" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                <a>+ 38 (093) 227 44 65</a>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                <a>+ 38 (093) 227 44 65</a>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                <a href="mailto:techzone@gmail.com">techzone@gmail.com</a>    
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                    <NavDropdown title="Ваше місто" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                            Київ
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Харків
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                            Львів
                        </NavDropdown.Item>
                    </NavDropdown>
                        <Nav.Link eventKey={2}>
                            UA | <span>EN</span>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar expand="lg" className="menu">
                <Container>
                    <Navbar.Brand>
                        <Catalog />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                            <form>
                                <input type="search"
                            placeholder="Пошук товарів"
                            className="me-2"
                            aria-label="Search"/>
                                <button id="search"><img src="/images/icons/search.svg"/></button>
                            </form>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <img src="/images/icons/balance_light.svg"/>
                        </Nav.Link>
                        <Nav.Link>
                            <img src="/images/icons/favorite_light.svg"/>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/cart">
                                <img src="/images/icons/shopping_cart.svg"/>
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to={isAuthenticated ? '/cabinet' : '/login'}>
                                <img src="/images/icons/person.svg"/>
                            </NavLink>
                        </Nav.Link>

                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

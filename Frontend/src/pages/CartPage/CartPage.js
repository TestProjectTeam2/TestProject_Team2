import React from "react";
import { Button } from "react-bootstrap";
import {  NavLink, useNavigate } from 'react-router-dom';
import { BuyWith } from "../../components/BuyWith/BuyWith";
import CartItem from "./CartItem";
import './CartPage.scss';
import { useSelector } from 'react-redux';

export default function CartPage() {
    
    const items = useSelector((state) => state.cart.items);
    let navigate = useNavigate();
    return(
        <div className="cartPage">
            <div className="cart">
                <h1>Кошик</h1>
                <hr />
                {items && items.map((item) => (
                    <CartItem mutability={true} slug={item.slug}/>
                ))}
                <hr />
                <div className="general">
                    <button onClick={() => navigate(-1)} id="back">
                        <img src="/images/icons/arrow_forward_ios.svg" alt="back icon"/>
                        Продовжити вибір товарів
                    </button>
                    {/* {items.length !== 0 ? (
                    <h2>Разом: 35999 ₴</h2>
                    ) : (
                    <></>
                    )} */}
                    <Button id="order">
                        <NavLink to="/order">Оформити замовлення</NavLink>
                    </Button>
                </div>
            </div>
            <BuyWith />
        </div>
    );
}
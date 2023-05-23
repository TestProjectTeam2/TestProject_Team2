import React from "react";
import { Button } from "react-bootstrap";
import {  useNavigate } from 'react-router-dom';
import { BuyWith } from "../../components/BuyWith/BuyWith";
import CartItem from "./CartItem";
import './CartPage.scss';

export default function CartPage() {
    let navigate = useNavigate();
    return(
        <div className="cartPage">
            <div className="cart">
                <h1>Кошик</h1>
                <hr />
                <CartItem />
                <hr />
                <div className="general">
                    <button onClick={() => navigate(-1)} id="back">
                        <img src="/images/icons/arrow_forward_ios.svg" alt="back icon"/>
                        Продовжити вибір товарів
                    </button>
                    <h2>Разом: 35999 ₴</h2>
                    <Button id="order">Оформити замовлення</Button>
                </div>
            </div>
            <BuyWith />
        </div>
    );
}
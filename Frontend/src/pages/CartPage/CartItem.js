import React, {useState} from "react";

export default function CartItem() {
    const [count, setCount] = useState(1);
    function increment() {
        const newValue = count + 1;
        if (newValue <= 42) {
          setCount(newValue);
        }
      }
    
      function decrement() {
        const newValue = count - 1;
        if (newValue >= 1) {
          setCount(newValue);
        }
      }
    return(
        <div className="cartItem">
            <img  alt="product" src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08183651.png"/>
            <div className="product__title">
                <h4>Ноутбук Lenovo IdeaPad Gaming 3 15IHU6 (82K101FJRA) Shadow Black</h4>
                <p className="code">Код товару: 350001258</p>
            </div>
            <div className="count-button">
                <p className="title">Кількість</p>
                <div>
                    <button type="button" onClick={decrement}>-</button>
                    <input type="text" defaultValue={1} value={count}/>
                    <button type="button" onClick={increment}>+</button>
                </div>
            </div>
            <div className="price">
                <p className="title">Ціна</p>
                <p className="old-price">47999</p>
                <p className="new-price">35 999 ₴</p>
            </div>
            <button className="deleteButton"><img src="/images/icons/delete.svg" alt="delete"/></button>
        </div>
    );
}
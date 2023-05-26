import React, {useState, useEffect} from "react";
import './CartItem.scss';
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";

export default function CartItem({mutability, slug}) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/product/${slug}/`);
          setProduct(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    
  }, []);
  
    const dispatch = useDispatch();

    const handleRemoveFromCart = () => {
      dispatch(removeFromCart( product.slug));
      alert("Видалено з кошику");
    };    

    return(
        <div className="cartItem">
            {product && (
            <img alt="product" src={`${product.url_img}`} />
            )}
            <div className="product__title">
            {product && (
              <>
                <h4>{product.name}</h4>
                <p className="code">Код товару: {product.id}</p>
              </>
            )}
            </div>
            <div className="count-button">
                <p className="title">Кількість</p>
                <div>
                  <p>1</p>
                </div>
            </div>
            <div className="price">
            {product && (
              <>
                <p className="title">Ціна</p>
                <p className="old-price">{product.price}</p>
                <p className="new-price">{product.price - Number((product.discount / 100) * product.price)} ₴</p>
              </>
            )}
            </div>
            {mutability && product && (
            <button className="deleteButton" onClick={handleRemoveFromCart}><img src="/images/icons/delete.svg" alt="delete"/></button>
            )}                

        </div>
    );
}
import React, {useEffect, useState} from 'react';

import './BuyWith.scss';
import ProductCard from "../productCard/ProductCard";
import axios from 'axios';

export function BuyWith() {
	const [products, setProducts] = useState(null)

	useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://127.0.0.1:8000/api/product/');
            setProducts(response.data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);

	return(
	<div className='buy-with'>
		<div className='buy-with__title'>З цим товаром купують</div>
		<div className='buy-with__card-container'>
			{products && products.slice(0, 4).map((product) => (
				<ProductCard name={product.name} oldPrice={product.price} img={product.url_img} discount={product.discount} slug={product.slug}/>
			))}
		</div>
	</div>
	);
}
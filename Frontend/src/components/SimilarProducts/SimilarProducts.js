import React, {useEffect, useState} from 'react';
import './SimilarProducts.scss';
import ProductCard from '../productCard/ProductCard';
import axios from 'axios';

export function SimilarProducts() {
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
	<div className='similar-products'>
		<div className='similar-products__title'>Схожі товари</div>
		<div className='similar-products__card-container'>
			{products && products.slice(0, 4).map((product) => (
					<ProductCard name={product.name} oldPrice={product.price} discount={product.discount} />
			))}
		</div>
	</div>
	);
}
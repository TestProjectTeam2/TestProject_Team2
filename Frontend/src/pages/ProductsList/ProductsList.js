import React, {useEffect, useState} from "react";
import ProductCard from "../../components/productCard/ProductCard";
import './ProductList.scss';
import { useParams} from 'react-router-dom';
import axios from "axios";
import { Helmet } from 'react-helmet';

export default function ProductList() {
	const { slug } = useParams();
    const [category, setCagegory] = useState(null);
    const [categoryProducts, setCategoryProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://127.0.0.1:8000/api/categories/${slug}/`);
            setCagegory(response.data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
    }, [slug]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://127.0.0.1:8000/api/product/category/${slug}/`);
            setCategoryProducts(response.data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
    }, [slug]);
    

    return(
        <div className='container'>
            <Helmet>
                <title>TechZone - {slug}</title>
            </Helmet>
        {category !== null && (
            <h3>{category.name}</h3>
        )}
            <div className="product-list">
                {categoryProducts !== null && categoryProducts.map((product) => (
                    <ProductCard name={product.name} oldPrice={product.price} discount={product.discount} slug={product.slug}/>
                ))}
                {categoryProducts !== null && categoryProducts.map((product) => (
                    <ProductCard name={product.name} oldPrice={product.price} discount={product.discount} slug={product.slug}/>
                ))}
            </div>
        </div>
    );
}
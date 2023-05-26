import React, {useEffect, useState} from "react";
import { Row } from "react-bootstrap";
import { useParams} from 'react-router-dom';
import { ProductCardDetails } from '../../components/ProductCardDetails/ProductCardDetails';
import { ProductCardTabs } from '../../components/ProductCardTabs/ProductCardTabs';
import './ProductCardPage.scss';
import { BuyWith } from "../../components/BuyWith/BuyWith";
import { SimilarProducts } from "../../components/SimilarProducts/SimilarProducts";
import axios from "axios";
import { Helmet } from 'react-helmet';

export function ProductCardPage() {
	const [product, setProduct] = useState(null);
	const { slug } = useParams();

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
    }, [slug]);

	return (
		<Row>
			<Helmet>
                <title>TechZone - {slug}</title>
            </Helmet>
			{product !== null && (
			<div className="product-card">
				{/* <ul className="breadcrumbs">
					<li className="breadcrumbs__item">
						<a className="breadcrumbs__link" href='#'>
							<NavLink to="/">
								Головна
							</NavLink>
						</a>
						<img src='/images/icons/icon-small=arrow-forward.svg' alt="arrow"/>
					</li>
					<li className="breadcrumbs__item">
						<a className="breadcrumbs__link" href='#'>Комп'ютери та ноутбуки</a>
						<img src='/images/icons/icon-small=arrow-forward.svg' alt="arrow"/>
					</li>
					<li className="breadcrumbs__item">
						<a className="breadcrumbs__link" href='#'>Ноутбуки</a>
						<img src='/images/icons/icon-small=arrow-forward.svg' alt="arrow"/>
					</li>
					<li className="breadcrumbs__item">
						<a className="breadcrumbs__link" href='#'>Ноутбуки Lenovo</a>
						<img src='/images/icons/icon-small=arrow-forward.svg' alt="arrow"/>
					</li>
					<li className="breadcrumbs__item">Ноутбук Lenovo IdeaPad Gaming 3 15IHU6 (82K101FJRA) Shadow Black</li>
				</ul> */}
				<div className="headline">
					<div className="headline__title">{product.name}</div>
					<div className="headline__product-code">Код товару: <span>{product.id}</span></div>
				</div>
				<form action='#' className="rate">
					<div className="rate__body">
						<div className="rate__active"></div>
						<div className="rate__items">
							<input type='radio' className="rate__item" value="1" name="rate"/>
							<input type='radio' className="rate__item" value="2" name="rate"/>
							<input type='radio' className="rate__item" value="3" name="rate"/>
							<input type='radio' className="rate__item" value="4" name="rate"/>
							<input type='radio' className="rate__item" value="5" name="rate"/>
						</div>
					</div>
					<div className="rate__value">4,4</div>
				</form>
				<div className="review">
					<img src='/images/icons/quick_phrases.svg' alt='review'/>
					<div>30 відгуків</div>
				</div>
				<ProductCardDetails price={product.price} slug={product.slug} count={product.count} discount={product.discount} />
				<ProductCardTabs/>
				<BuyWith/>
				<SimilarProducts/>
			</div>
			)}
		</Row>
	);
}
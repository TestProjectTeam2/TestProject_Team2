import { Row } from "react-bootstrap";

import { ProductCardDetails } from '../../components/ProductCardDetails/ProductCardDetails';
import { ProductCardTabs } from '../../components/ProductCardTabs/ProductCardTabs';
import './ProductCardPage.scss';
import { BuyWith } from "../../components/BuyWith/BuyWith";
import { SimilarProducts } from "../../components/SimilarProducts/SimilarProducts";



export const ProductCardPage = () => (
	<Row>
		<div className="product-card">
			<ul className="breadcrumbs">
				<li className="breadcrumbs__item">
					<a className="breadcrumbs__link" href='#'>Головна</a>
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
			</ul>
			<div className="headline">
				<div className="headline__title">Ноутбук Lenovo IdeaPad Gaming 3 15IHU6 (82K101FJRA) Shadow Black</div>
				<div className="headline__product-code">Код товару: <span>350001258</span></div>
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
			<ProductCardDetails/>
			<ProductCardTabs/>
			<BuyWith/>
			<SimilarProducts/>
		</div>
	</Row>
)
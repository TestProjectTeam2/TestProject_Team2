import React from 'react';
import {Card} from 'react-bootstrap';
import './ProductCard.scss';
import { NavLink } from 'react-router-dom';

export default function ProductCard() {
    return(
        <Card className='product d-flex flex-column p-3 align-items-center'>
				<div className="product__top d-flex justify-content-between align-items-center w-100">
					<div className="product__heart">
						<img src="/images/icons/favorite.svg" alt="favorite"/>
					</div>
					<div className='product__availability align-self-end'><span></span>Товар в наявності</div>
				</div>
				<div className="product__image-wrapper text-center position-relative">
					<img  alt="product" src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08183651.png"/>
				</div>
				<div className="product__info">
					<div className="product__title-wrapper">
						<NavLink to='/product'>
							<div className="product__title">Ноутбук Lenovo IdeaPad Gaming 3 15IHU6 (82K101FJRA) Shadow Black</div>
						</NavLink>
						<div className="product__comment d-flex align-items-center">
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
							</form>
							<div className="review mb-0">
								<div>9 відгуків</div>
							</div>
						</div>
					</div>
					<div className="product__old-price d-flex">
						<div>47999 &#8372;</div>
						<button>- 25 %</button>
					</div>
					<div className="product__buy d-flex justify-content-between align-items-center w-100">
						<div className="product__new-price">35 999 &#8372;</div>
						<NavLink to="/cart">
							<button variant="primary" className="product__button"><span></span></button>
						</NavLink>
					</div>
					<div className='product__delivery'><span></span>Готовий до відправлення</div>
				</div>
				</Card>
    );
}

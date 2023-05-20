import {Card, Col} from "react-bootstrap";

import './BuyWith.scss';

const buyWith = [
	{
		id: 1,
		title: 'Сумка для ноутбука Lenovo Casual T210 15.6" Black',
		image: '/images/product-card-page/Rectangle 1.jpg',
		oldPrice: 2999,
		newPrice: 1999
	},
	{
		id: 2,
		title: 'Миша Logitech M185 Wireless Red (910-002237/910-002240)',
		image: '/images/product-card-page/Rectangle 2.jpg',
		oldPrice: 200,
		newPrice: 150
	},
	{
		id: 3,
		title: 'Миша Logitech M185 Wireless Red (910-002237/910-002240)',
		image: '/images/product-card-page/Rectangle 3.jpg',
		oldPrice: 2300,
		newPrice: 2000
	},
]

export const BuyWith = () => (
	<div className='buy-with'>
		<div className='buy-with__title'>З цим товаром купують</div>
		<div className='buy-with__card-container'>
			{buyWith.map( ({id, title, image, oldPrice, newPrice}) => <Col lg={4} key={id} className={'d-flex my-3'}>
				<Card className={'product d-flex flex-column p-3 align-items-center'}>
				<div className="product__top d-flex justify-content-between align-items-center w-100">
					<div className="product__heart">
						<img src="/images/icons/unliked.svg" alt="favorite"/>
					</div>
					<div className='product__availability align-self-end'><span></span>Товар в наявності</div>
				</div>
				<div className="product__image-wrapper text-center position-relative">
					<img src={image} alt="product"/>
				</div>
				<div className="product__info">
					<div className="product__title-wrapper">
						<a href='https://m.youtube.com'><div className="product__title">{title}</div></a>
						<div class="product__comment d-flex align-items-center">
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
								<div className="rate__value">4,1</div>
							</form>
							<div className="review mb-0">
								<div>9 відгуків</div>
							</div>
						</div>
					</div>
					<div class="product__old-price d-flex">
						<div>{oldPrice} &#8372;</div>
						<button>- 7 %</button>
					</div>
					<div class="product__buy d-flex justify-content-between align-items-center w-100">
						<div className="product__new-price">{newPrice} &#8372;</div>
						<button variant="primary" className="product__button"><span></span></button>
					</div>
					<div className='product__delivery'><span></span>Готовий до відправлення</div>
				</div>
				</Card>
			</Col>)}
		</div>
	</div>
)
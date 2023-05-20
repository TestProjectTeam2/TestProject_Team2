import {Card, Col} from "react-bootstrap";

import './SimilarProducts.scss';

const similarProducts = [
	{
		id: 1,
		title: 'Ноутбук ASUS TUF Gaming F15 FX506LHB-HN344 (90NR03U2-M00C90) Bonfire Black / Intel Core i5-10300H / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650 + Рюкзак ASUS TUF Gaming backpack',
		image: '/images/product-card-page/Rectangle 4.jpg',
		oldPrice: 30000,
		newPrice: 20000
	},
	{
		id: 2,
		title: 'Ноутбук ASUS TUF Gaming F15 FX506LHB-HN323 (90NR03U2-M008E0) Bonfire Black / Intel Core i5-10300H / RAM 8 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650',
		image: '/images/product-card-page/Rectangle 5.jpg',
		oldPrice: 54999,
		newPrice: 40000
	},
	{
		id: 3,
		title: 'Ноутбук Lenovo IdeaPad 1 15IGL7 (82V7003WRA) Cloud Grey / Intel Pentium Silver N5030 / RAM 8 ГБ / SSD 256 ГБ',
		image: '/images/product-card-page/Rectangle 6.jpg',
		oldPrice: 15000,
		newPrice: 11000
	},
]

export const SimilarProducts = () => (
	<div className='similar-products'>
		<div className='similar-products__title'>Схожі товари</div>
		<div className='similar-products__card-container'>
			{similarProducts.map( ({id, title, image, oldPrice, newPrice}) => <Col lg={4} key={id} className={'d-flex my-3'}>
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
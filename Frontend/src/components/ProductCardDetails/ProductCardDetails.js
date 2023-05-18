import { Navigation, Mousewheel} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';

import './ProductCardDetails.scss';

const cardSlides = [
	{
		id: 1,
		image: '/images/product-card-page/image 1.png'
	},
	{
		id: 2,
		image: '/images/product-card-page/image 2.png'
	},
	{
		id: 3,
		image: '/images/product-card-page/image 3.png'
	},
	{
		id: 4,
		image: '/images/product-card-page/image 4.png'
	},
	{
		id: 5,
		image: '/images/product-card-page/image 3.png'
	},
]

export const ProductCardDetails = () => {
	return (
		<section className='content-body'>
			<div className='content-body__slider'>
				<div className='image-slides'>
					<Swiper
					// install Swiper modules
					modules={[Navigation, Mousewheel]}
					slidesPerView={4}
					navigation
					mousewheel={true}
					direction={"vertical"}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log('slide change')}
					>
						{cardSlides.map(({id, image}) => (
							<SwiperSlide key={id}>
								<div className='image-slide'>
									<img src={image} alt='product-img'/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
			<div className='content-body__poster'>
				<img src='/images/product-card-page/image 5.png' alt='poster'/> 
			</div>
			<div className='content-body__info'>
				<div className='info-top'>
					<div className='info-top__guarantee'><span></span>Гарантія 12 місяців</div>
					<div className='info-top__availability'><span></span>Товар в наявності</div>
				</div>
				<div className='info-price'>27 999</div>
				<div className='info-body'>
					<div className='info-body__payment-choice choice-payment'>
						<div className='choice-payment__item'>
							<div className='choice-payment__title'>В кредит</div>
							<div className='choice-payment__condition'>3 000 грн на 12 місяців</div>
						</div>
						<div className='choice-payment__item'>
							<div className='choice-payment__title'>Оплата частинами</div>
							<div className='choice-payment__condition'>4 600 грн в місяць</div>
						</div>
					</div>
					<button type='button' className='info-body__button'><span></span>В корзину</button>
					<div className='info-body__delivery-container container-delivery'>
						<div className='container-delivery__title'>
							<div>Доставка в<button>Київ</button></div>
						</div>
						<div className='container-delivery__delevery'>
							<div className='container-delivery__delevery-item'>
								<div className='container-delivery__delevery-details'>
									<img src='/images/icons/offline_pin.svg' alt='pickup'/>
									<div className='container-delivery__method'>Самовивіз з магазину</div>
									<button type='button' className='container-delivery__date'>16 травня</button>
								</div>
								<div className='container-delivery__text'>Безкоштовно</div>
							</div>
							<div className='container-delivery__delevery-item'>
								<div className='container-delivery__delevery-details'>
									<img src='/images/icons/local_shipping.svg' alt='post-delivery'/>
									<div className='container-delivery__method'>Доставка на пошту</div>
									<button type='button' className='container-delivery__date' >16 травня</button>
								</div>
								<div className='container-delivery__text'>Безкоштовно</div>
							</div>
							<div className='container-delivery__delevery-item'>
								<div className='container-delivery__delevery-details'>
									<img src='/images/icons/home_work.svg' alt='courier'/>
									<div className='container-delivery__method'>Кур’єрна доставка</div>
									<button className='container-delivery__date'>16 травня</button>
								</div>
								<div type='button' className='container-delivery__text'>Безкоштовно</div>
							</div>
						</div>
					</div>
					<div className='info-body__action-items'>
						<div className='action'>
							<button type='button' className='action__compare'>
								<img src='/images/icons/balance.svg' alt='compare'/><div>Порівняти</div>
							</button>
							<button type='button' className='action__favorite'>
								<img src='/images/icons/favorite.svg' alt='favorite'/><div>В обране</div>
							</button>
							<button type='button' className='action__share'>
								<img src='/images/icons/share.svg' alt='share'/><div>Поділитися</div>
							</button>
						</div>
					</div>
					<div className='info-body__supporting-description description-supporting'>
						<div className='description-supporting__secondary-buttons'>
							<button type='button'>Умови доставки та самовивозу</button>
							<button type='button'>Умови доставки та самовивозу</button>
						</div>
						<div className='description-supporting__description'>
							<span>Оплата.</span> Оплата під час отримання товару, Google Pay, Картою онлайн, -5% знижки при оплаті від 500 грн 
							карткою Mastercard Універсальна/Універсальна Gold від ПриватБанк, Безготівковими для юридичних осіб, 
							Оплатити онлайн соціальною картою "Пакунок малюка", Безготівковий для фізичних осіб, Apple Pay, 
							Оплатити онлайн картою "єПідтримка", Visa, Mastercard
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
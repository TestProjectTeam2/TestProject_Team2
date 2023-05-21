import './BuyWith.scss';
import ProductCard from "../productCard/ProductCard";

export const BuyWith = () => (
	<div className='buy-with'>
		<div className='buy-with__title'>З цим товаром купують</div>
		<div className='buy-with__card-container'>
				<ProductCard />
				<ProductCard />
				<ProductCard />
		</div>
	</div>
)
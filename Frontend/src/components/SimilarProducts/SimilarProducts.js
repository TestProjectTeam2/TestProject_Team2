import './SimilarProducts.scss';
import ProductCard from '../productCard/ProductCard';

export const SimilarProducts = () => (
	<div className='similar-products'>
		<div className='similar-products__title'>Схожі товари</div>
		<div className='similar-products__card-container'>
			<ProductCard />
			<ProductCard />
			<ProductCard />
		</div>
	</div>
)
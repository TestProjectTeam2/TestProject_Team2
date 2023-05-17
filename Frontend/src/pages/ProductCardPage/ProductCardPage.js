import './ProductCardPage.scss';

export const ProductCardPage = () => (
	<div className="product-card">
		<ul className="breadcrumbs">
			<li className="breadcrumbs__item">
				<a className="breadcrumbs__link" href='#'>Головна</a>
				<img src='/images/icons/icon-small=arrow-forward.svg' alt="arrow"/>
			</li>
			<li className="breadcrumbs__item">
				<a className="breadcrumbs__link" href='#'>Товари</a>
				<img src='/images/icons/icon-small=arrow-forward.svg' alt="arrow"/>
			</li>
			<li className="breadcrumbs__item">
				<a className="breadcrumbs__link" href='#'>Для дому</a>
				<img src='/images/icons/icon-small=arrow-forward.svg' alt="arrow"/>
			</li>
			<li className="breadcrumbs__item">
				<a className="breadcrumbs__link" href='#'>Миючі засоби</a>
				<img src='/images/icons/icon-small=arrow-forward.svg' alt="arrow"/>
			</li>
			<li className="breadcrumbs__item">
				<a className="breadcrumbs__link" href='#'>Мило</a>
				<img src='/images/icons/icon-small=arrow-forward.svg' alt="arrow"/>
			</li>
			<li className="breadcrumbs__item">Мило Duru</li>
		</ul>
		<div className="headline">
			<div className="headline__title">Заголовок 2</div>
			<div className="headline__product-code">Код товару: <span>000000</span></div>
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
	</div>
)
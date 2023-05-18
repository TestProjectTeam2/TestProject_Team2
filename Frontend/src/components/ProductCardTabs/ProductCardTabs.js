import { useState } from 'react';
import './ProductCardTabs.scss';

const about = [
	{
		id: 1,
		title: 'Про товар',
		description: `Новітня відеокарта NVIDIA GeForce RTX серії 30 і продуктивний процесор Intel Core 11-го покоління, 
		встановлений у максимальній конфігурації цього ноутбука, подбають, щоб твій ігровий потенціал сягнув нового рівня. 
		Виходь на один рівень із геймерами-професіоналами і завдяки Ideapad 3i Gaming. Керуй зручно та точно з клавіатурою, 
		що підтримує 100% N-Key Rollover. Поринай у світ надзвичайно плавної графіки з дисплеєм Full HD із матрицею IPS та 
		частотою оновлення кадрів до 165 Гц. Миттєво визначай засідку ворогів з динаміками Nahimic, що відтворюють тривимірне звучання. 
		Високоефективна система терморегуляції підтримує оптимальну температуру ноутбука, у яких би запеклих віртуальних битвах тобі не 
		довелося брати участь.`
	}
]

const characteristics = [
	{
		id: 1,
		title: 'Характеристики',
		description: `Новітня відеокарта NVIDIA GeForce RTX серії 30 і продуктивний процесор Intel Core 11-го покоління, 
		встановлений у максимальній конфігурації цього ноутбука, подбають, щоб твій ігровий потенціал сягнув нового рівня. 
		Виходь на один рівень із геймерами-професіоналами і завдяки Ideapad 3i Gaming. Керуй зручно та точно з клавіатурою, 
		що підтримує 100% N-Key Rollover. Поринай у світ надзвичайно плавної графіки з дисплеєм Full HD із матрицею IPS та 
		частотою оновлення кадрів до 165 Гц. Миттєво визначай засідку ворогів з динаміками Nahimic, що відтворюють тривимірне звучання. 
		Високоефективна система терморегуляції підтримує оптимальну температуру ноутбука, у яких би запеклих віртуальних битвах тобі не 
		довелося брати участь.`
	}
]

const rates = [
	{
		id: 1,
		title: 'Оцінки та відгуки',
		description: `Новітня відеокарта NVIDIA GeForce RTX серії 30 і продуктивний процесор Intel Core 11-го покоління, 
		встановлений у максимальній конфігурації цього ноутбука, подбають, щоб твій ігровий потенціал сягнув нового рівня. 
		Виходь на один рівень із геймерами-професіоналами і завдяки Ideapad 3i Gaming. Керуй зручно та точно з клавіатурою, 
		що підтримує 100% N-Key Rollover. Поринай у світ надзвичайно плавної графіки з дисплеєм Full HD із матрицею IPS та 
		частотою оновлення кадрів до 165 Гц. Миттєво визначай засідку ворогів з динаміками Nahimic, що відтворюють тривимірне звучання. 
		Високоефективна система терморегуляції підтримує оптимальну температуру ноутбука, у яких би запеклих віртуальних битвах тобі не 
		довелося брати участь.`
	}
]

const questines = [
	{
		id: 1,
		title: ' ',
		description: ` `
	}
]

const tabs = [
	{
		id: 1,
		title: 'Про товар',
		content: about
	},
	{
		id: 2,
		title: 'Характеристики',
		content: characteristics
	},
	{
		id: 3,
		title: 'Оцінки та відгуки',
		content: rates
	},
	{
		id: 4,
		title: 'Питання та відповіді',
		content: questines
	}
]

export const ProductCardTabs = () => {
	const [ currentTab, setCurrentTab ] = useState('1');

	const handleTabClick = e => {
		setCurrentTab(e.target.id)
	}

	return(
			<div className='card-tabs-container'>
				<div className='tabs'>
					<nav className='tabs__items'>
						{tabs.map(({id, title}) => (
								<button 
								key={id} 
								id={id} 
								className='tabs__item' 
								disabled={currentTab === `${id}`} 
								onClick={(handleTabClick)}
								>
									{title}
								</button>
						))}
					</nav>
				</div>
				<div className='content-main'>
					{tabs.map(({id, content}) => (
						<div key={id} className='content-main__container'>
							{currentTab === `${id}` && <div className='content-main__body'>{content.map(({id, title, description}) => (
								<div className='content-inside' key={id}>
									<div className='content-inside__title'>{title}</div>
									<div className='content-inside__description'>{description}</div>
							</div>
							))}</div>}
						</div>
					))}
				</div>
			</div>
	)
}
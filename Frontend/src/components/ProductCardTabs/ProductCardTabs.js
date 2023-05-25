import { useState } from 'react';
import './ProductCardTabs.scss';

const about = [
	{
		id: 1,
		title: 'Про товар',
		description: false,
		shortDescreption: `Новітня відеокарта NVIDIA GeForce RTX серії 30 і продуктивний процесор Intel Core 11-го покоління, 
		встановлений у максимальній конфігурації цього ноутбука, подбають, щоб твій ігровий потенціал сягнув нового рівня. 
		Виходь на один рівень із геймерами-професіоналами і завдяки Ideapad 3i Gaming. Керуй зручно та точно з клавіатурою, 
		що підтримує 100% N-Key Rollover. Поринай у світ надзвичайно плавної графіки з дисплеєм Full HD із матрицею IPS та 
		частотою оновлення кадрів до 165 Гц. Миттєво визначай засідку ворогів з динаміками Nahimic, що відтворюють тривимірне звучання. 
		Високоефективна система терморегуляції підтримує оптимальну температуру ноутбука, у яких би запеклих віртуальних битвах тобі не 
		довелося брати участь.`
	}
]

const chara = [
	{
		id: 1,
		title: 'Екран',
		details: [
			{
				id:1,
				name: 'Серія',
				report: 'IdeaPad Gaming 3'
			},
			{
				id:2,
				name: 'Діагональ екрана',
				report: '15.6" (1920x1080) Full HD'
			},
			{
				id:3,
				name: 'Тип екрану',
				report: 'IPS'
			},
			{
				id:4,
				name: 'Роздільна здатність',
				report: '1920x1080'
			},
		]
	},
	{
		id: 2,
		title: 'Відео-картка',
		details: [
			{
				id:1,
				name: 'Виробник відеокарти',
				report: 'Nvidia'
			},
			{
				id:2,
				name: 'Дискретна відеокарта',
				report: 'GeForce GTX 1650'
			},
			{
				id:3,
				name: 'Тип відеокарти',
				report: 'Дискретна + Інтегрована'
			},
			{
				id:4,
				name: `Обсяг пам'яті відеокарти`,
				report: '4 ГБ'
			},
			{
				id:5,
				name: `Інтегрована відеокарта`,
				report: 'Iris Xe Graphics'
			},
		]
	},
]

const characteristics = [
	{
		id: 1,
		title: 'Характеристики',
		description: chara,
		shortDescreption: false
	}
]

const rates = [
	{
		id: 1,
		title: 'Оцінки та відгуки',
		description: false,
		shortDescreption: false,
		revies: [
			{
				id: 1,
				userName: 'Варвара',
				date: '20.03.2023',
				approve: 'Покупка підтверджена',
				message: `Lorem ipsum dolor sit amet consectetur. At mauris sed morbi eleifend laoreet at ac egestas arcu. Morbi leo 
				nec vel egestas arcu est. Fringilla integer ac pulvinar quis turpis. Ultrices in amet volutpat ornare bibendum ac bibendum. 
				Nulla aliquam quisque faucibus sem pellentesque natoque. A magnis vitae adipiscing aliquam iaculis. Tellus cum velit placerat 
				molestie urna fringilla. Sit enim sit a eget amet.`,
				like: '0',
				dislike: '0',
			},
			{
				id: 2,
				userName: 'Олександра',
				date: '12.03.2023',
				approve: 'Покупка підтверджена',
				message: `Lorem ipsum dolor sit amet consectetur. At mauris sed morbi eleifend laoreet at ac egestas arcu. Morbi leo 
				nec vel egestas arcu est. Fringilla integer ac pulvinar quis turpis. Ultrices in amet volutpat ornare bibendum ac bibendum. 
				Nulla aliquam quisque faucibus sem pellentesque natoque. A magnis vitae adipiscing aliquam iaculis. Tellus cum velit placerat 
				molestie urna fringilla. Sit enim sit a eget amet.`,
				like: '0',
				dislike: '0',
			},
		]
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
		content: characteristics
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
							{currentTab === `${id}` && <div className='content-main__body'>{content.map(({id, title, description, shortDescreption, revies}) => (
								<div className='content-inside' key={id}>
									<div className='content-inside__title'>{title}</div>
									<div className='content-inside__description'>{description ? description.map( ({id, title, details}) => (
										<div className='description' key={id}>
											<div className='description__subtitle'>{title}</div>
											<div className='description__details'>{details.map(({id, name, report}) => (
												<div className='report d-flex justify-content-between align-items-center' key={id}>
													<div className='report__name'>{name}</div>
													<div className='report__underline mx-2'>_</div>
													<div className='report__info'>{report}</div>
												</div>))}
											</div>
										</div>
									)) 
								: shortDescreption ? shortDescreption : revies.map(({id, userName, date, approve, message, like, dislike}) => (
									<div className='revies' key={id}>
										<div className='revies__body mb-2'>
										<div className='revies__top d-flex justify-content-between align-items-center mb-3'>
											<div className='revies__title'>
												<div className='revies__user-name mb-1'>{userName}</div>
												<div className='revies__confirmation'><span></span>{approve}</div>
											</div>
											<div className='revies__date align-self-start'>{date}</div>
										</div>
										<div className='revies__message'>{message}</div>
										</div>
										<div className='revies__likes d-flex justify-content-end align-items-end text-right'>
											<div className='revies__dislike d-flex'>
												<img src='/images/icons/thumb_down.svg' alt='dislike' />
												<div className='mx-1 align-self-end'>{dislike}</div>
											</div>
											<div className='revies__like d-flex'>
												<img src='/images/icons/thumb_up.svg' alt='like' />
												<div className='mx-1 align-self-end'>{like}</div>
											</div>
										</div>
									</div>
								))}</div>
							</div>
							))}</div>}
						</div>
					))}
				</div>
			</div>
	)
}
import React, {useEffect, useState} from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.scss';
import ProductCard from '../../components/productCard/ProductCard';
import YouTube from 'react-youtube';
import axios from 'axios';
import { Helmet } from 'react-helmet';

export default function HomePage() {
    const [products, setProducts] = useState(null)
    const opts = {
        width: '320',
        height: '200'
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://127.0.0.1:8000/api/product/');
            setProducts(response.data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);
      
      return(
        <>
            <Helmet>
                <title>TechZone - home page</title>
            </Helmet>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src='/images/home-page-images/Default.png'
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src='/images/home-page-images/Variant1.png'
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src='/images/home-page-images/Variant2.png'
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src='/images/home-page-images/Variant3.png'
                    alt="Fourth slide"
                    />
                </Carousel.Item>
            </Carousel>
            <section className='container'>
                <section className='container__item'>
                    <h2>Акційні пропозиції</h2>
                    <div className='card-container'>
                        {products && products.slice(0, 5).map((product) => (
                            <ProductCard name={product.name} oldPrice={product.price} discount={product.discount} slug={product.slug}/>
                        ))}
                    </div>
                    <div className="more-link">
                        <a href='#'>Показати ще</a>
                        <hr />
                    </div>
                </section>
                <section className='container__item'>
                    <h2>Гарячі новинки</h2>
                    <div className='card-container'>
                        {products && products.slice(0, 5).map((product) => (
                            <ProductCard name={product.name} oldPrice={product.price} discount={product.discount} slug={product.slug}/>
                            ))}
                    </div>
                    <div className="more-link">
                        <a href='#'>Показати ще</a>
                        <hr />
                    </div>
                </section>
                <section className='container__item'>
                    <h2>Найбільш обговорювані товари</h2>
                    <div className='card-container'>
                        {products && products.slice(0, 5).map((product) => (
                            <ProductCard name={product.name} oldPrice={product.price} discount={product.discount} slug={product.slug}/>
                            ))}
                    </div>
                    <div className="more-link">
                        <a href='#'>Показати ще</a>
                        <hr />
                    </div>
                </section>
            </section>
            <h2 className='youtube-title'>Нові відео на каналі <span>TechZone</span></h2>
            <section className='videos'>
                <div className='card-container'>
                    <div className='video-card'>
                        <YouTube videoId="hsSdXu2JTWg" opts={opts}/>
                        <p>#Final Cut Pro та #Logic Pro для #iPad</p>
                        <p>19 травня 2023 р.</p>
                    </div>
                    <div className='video-card'>
                        <YouTube videoId="C79I3Coiv70" opts={opts}/>
                        <p>#Canon #Powershot V10 #camera</p>
                        <p>19 травня 2023 р.</p>
                    </div>
                    <div className='video-card'>
                        <YouTube videoId="bGIO7wFZBmg" opts={opts}/>
                        <p>#ASUS #ROG #Ally</p>
                        <p>18 травня 2023 р.</p>
                    </div>
                    <div className='video-card'>
                        <YouTube videoId="abpiuY5UAH0" opts={opts}/>
                        <p>Американський "Мавік" зі штучним інтелектом для #ЗСУ? | #RedCat #Teal 2 та Golden Eagle</p>
                        <p>17 травня 2023 р.</p>
                    </div>
                </div>
            </section>
            <div className='youtube-link'>
                <a  href='https://www.youtube.com/@rozetka'>Перейти на канал</a>
                <hr />
            </div>
            <section className='container'>
                <section className='container__item'>
                    <h2>Найбільш очікувані товари</h2>
                    <div className='card-container'>
                        {products && products.slice(0, 5).map((product) => (
                            <ProductCard name={product.name} oldPrice={product.price} discount={product.discount} slug={product.slug}/>
                            ))}
                    </div>
                    <div className="more-link">
                        <a href='#'>Показати ще</a>
                        <hr />
                    </div>
                </section>
                <section className='container__item'>
                    <h2>Рекомендації на основі ваших переглядів</h2>
                    <div className='card-container'>
                        {products && products.slice(0, 5).map((product) => (
                            <ProductCard name={product.name} oldPrice={product.price} discount={product.discount} slug={product.slug}/>
                            ))}
                    </div>
                    <div className="more-link">
                        <a href='#'>Показати ще</a>
                        <hr />
                    </div>
                </section>
            </section>
        </>
    );
}



import React, { useState, useRef } from 'react';
import { Overlay, Col, Nav, Row, Tab} from 'react-bootstrap';
import './Catalog.scss';
import CatalogItem from './CatalogItem';

export default function Catalog() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <button ref={target} onClick={() => setShow(!show)}>
        <img src="/images/icons/menu.svg" />
        <p>Каталог товаров</p>
      </button>
      <Overlay target={target.current} show={show} placement="bottom">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div className="catalog" {...props} >
            <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
              <Row>
                <Col className='categories' md={3}>
                  <Nav className="flex-column">
                    <Nav.Item>
                      <Nav.Link className="category" eventKey="first">
                        <p>Ноутбуки та комп'ютери</p>
                        <img src="/images/icons/next.svg" />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="category" eventKey="second">
                        <p>Смартфони, годинники</p> 
                        <img src="/images/icons/next.svg" />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="category" eventKey="third">
                        <p>Товари для геймерів</p> 
                        <img src="/images/icons/next.svg" />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="category" eventKey="fourth">
                        <p>Побутова техніка</p> 
                        <img src="/images/icons/next.svg" />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="category" eventKey="fifth">
                        <p>Техніка для кухні</p>
                        <img src="/images/icons/next.svg" />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="category" eventKey="sixth">
                        <p>Техніка для саду та городу</p>
                        <img src="/images/icons/next.svg" />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="category" eventKey="seventh">
                        <p>Автотовари та запчастини</p>
                        <img src="/images/icons/next.svg" />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="category" eventKey="eighth">
                        <p>Краса та здоров’я</p> 
                        <img src="/images/icons/next.svg" />
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col >
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <CatalogItem subcategories={[{'Ноутбуки': ['Asus', 'Lenovo', 'Dell', 'HP', 'Apple Macbook']}, {'Компютери': ['Манітори', 'Клавіатури', 'Мишки', 'Компютерні колонки', 'Програмне забезпечення']}, {'Планшети': ['Samsung', 'Apple iPad', 'HP', 'Xiaomi', 'Lenovo', 'Плівки, скло', 'Захисні чохли']}, {'Офісна техніка': ['Принтери', 'Сканери', 'Телефони']}, {'Аксесуари для ноутбуків': ['Навушники', 'Камера', 'Мікрофон', 'Карти памяті', 'Підставки для ноутбука', 'Переносні сумки', 'Захисні чохли']}]} /> 
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <CatalogItem subcategories={[{'Ноутбуки': ['Asus', 'Lenovo', 'Dell', 'HP', 'Apple Macbook']}, {'Компютери': ['Манітори', 'Клавіатури', 'Мишки', 'Компютерні колонки', 'Програмне забезпечення']}, {'Планшети': ['Samsung', 'Apple iPad', 'HP', 'Xiaomi', 'Lenovo', 'Плівки, скло', 'Захисні чохли']}, {'Офісна техніка': ['Принтери', 'Сканери', 'Телефони']}, {'Аксесуари для ноутбуків': ['Навушники', 'Камера', 'Мікрофон', 'Карти памяті', 'Підставки для ноутбука', 'Переносні сумки', 'Захисні чохли']}]} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <CatalogItem subcategories={[{'Ноутбуки': ['Asus', 'Lenovo', 'Dell', 'HP', 'Apple Macbook']}, {'Компютери': ['Манітори', 'Клавіатури', 'Мишки', 'Компютерні колонки', 'Програмне забезпечення']}, {'Планшети': ['Samsung', 'Apple iPad', 'HP', 'Xiaomi', 'Lenovo', 'Плівки, скло', 'Захисні чохли']}, {'Офісна техніка': ['Принтери', 'Сканери', 'Телефони']}, {'Аксесуари для ноутбуків': ['Навушники', 'Камера', 'Мікрофон', 'Карти памяті', 'Підставки для ноутбука', 'Переносні сумки', 'Захисні чохли']}]} /> 
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <CatalogItem subcategories={[{'Ноутбуки': ['Asus', 'Lenovo', 'Dell', 'HP', 'Apple Macbook']}, {'Компютери': ['Манітори', 'Клавіатури', 'Мишки', 'Компютерні колонки', 'Програмне забезпечення']}, {'Планшети': ['Samsung', 'Apple iPad', 'HP', 'Xiaomi', 'Lenovo', 'Плівки, скло', 'Захисні чохли']}, {'Офісна техніка': ['Принтери', 'Сканери', 'Телефони']}, {'Аксесуари для ноутбуків': ['Навушники', 'Камера', 'Мікрофон', 'Карти памяті', 'Підставки для ноутбука', 'Переносні сумки', 'Захисні чохли']}]} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                      <CatalogItem subcategories={[{'Ноутбуки': ['Asus', 'Lenovo', 'Dell', 'HP', 'Apple Macbook']}, {'Компютери': ['Манітори', 'Клавіатури', 'Мишки', 'Компютерні колонки', 'Програмне забезпечення']}, {'Планшети': ['Samsung', 'Apple iPad', 'HP', 'Xiaomi', 'Lenovo', 'Плівки, скло', 'Захисні чохли']}, {'Офісна техніка': ['Принтери', 'Сканери', 'Телефони']}, {'Аксесуари для ноутбуків': ['Навушники', 'Камера', 'Мікрофон', 'Карти памяті', 'Підставки для ноутбука', 'Переносні сумки', 'Захисні чохли']}]} /> 
                    </Tab.Pane>
                    <Tab.Pane eventKey="sixth">
                      <CatalogItem subcategories={[{'Ноутбуки': ['Asus', 'Lenovo', 'Dell', 'HP', 'Apple Macbook']}, {'Компютери': ['Манітори', 'Клавіатури', 'Мишки', 'Компютерні колонки', 'Програмне забезпечення']}, {'Планшети': ['Samsung', 'Apple iPad', 'HP', 'Xiaomi', 'Lenovo', 'Плівки, скло', 'Захисні чохли']}, {'Офісна техніка': ['Принтери', 'Сканери', 'Телефони']}, {'Аксесуари для ноутбуків': ['Навушники', 'Камера', 'Мікрофон', 'Карти памяті', 'Підставки для ноутбука', 'Переносні сумки', 'Захисні чохли']}]} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="seventh">
                      <CatalogItem subcategories={[{'Ноутбуки': ['Asus', 'Lenovo', 'Dell', 'HP', 'Apple Macbook']}, {'Компютери': ['Манітори', 'Клавіатури', 'Мишки', 'Компютерні колонки', 'Програмне забезпечення']}, {'Планшети': ['Samsung', 'Apple iPad', 'HP', 'Xiaomi', 'Lenovo', 'Плівки, скло', 'Захисні чохли']}, {'Офісна техніка': ['Принтери', 'Сканери', 'Телефони']}, {'Аксесуари для ноутбуків': ['Навушники', 'Камера', 'Мікрофон', 'Карти памяті', 'Підставки для ноутбука', 'Переносні сумки', 'Захисні чохли']}]} /> 
                    </Tab.Pane>
                    <Tab.Pane eventKey="eighth">
                      <CatalogItem subcategories={[{'Ноутбуки': ['Asus', 'Lenovo', 'Dell', 'HP', 'Apple Macbook']}, {'Компютери': ['Манітори', 'Клавіатури', 'Мишки', 'Компютерні колонки', 'Програмне забезпечення']}, {'Планшети': ['Samsung', 'Apple iPad', 'HP', 'Xiaomi', 'Lenovo', 'Плівки, скло', 'Захисні чохли']}, {'Офісна техніка': ['Принтери', 'Сканери', 'Телефони']}, {'Аксесуари для ноутбуків': ['Навушники', 'Камера', 'Мікрофон', 'Карти памяті', 'Підставки для ноутбука', 'Переносні сумки', 'Захисні чохли']}]} />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        )}
      </Overlay>
    </>
  );
}

import React, { useState, useRef, useEffect} from 'react';
import { Overlay, Col, Nav, Row, Tab} from 'react-bootstrap';
import './Catalog.scss';
import CatalogItem from './CatalogItem';
import axios from 'axios';

export default function Catalog() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);
  const target = useRef(null);
  
  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/categories/');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  fetchData();
}, []);

  return (
    <div>
      <button ref={target} onClick={() => setShow(!show)}>
        <img src="/images/icons/menu.svg" alt='menu icon'/>
        <p>Каталог товарів</p>
      </button>
      <Overlay target={target.current} show={show} placement="bottom">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div className="catalog" {...props}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
              <Row>
                <Col className='categories' md={3}>
                  <Nav className="flex-column">
                    {data.map((category) => (
                      <Nav.Item>
                        <Nav.Link className="category" eventKey={category.slug}>
                          <p>{category.name}</p>
                          <img src="/images/icons/next.svg" alt='next icon' />
                        </Nav.Link>
                      </Nav.Item>
                  ))}
                  </Nav>
                </Col>
                <Col >
                  <Tab.Content>
                    {data.map((category) => (
                      <Tab.Pane eventKey={category.slug}>
                        <CatalogItem subcategories={category.child} /> 
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        )}
      </Overlay>
    </div>
  );
}

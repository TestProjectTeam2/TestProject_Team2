import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Accordion, Navbar, Nav } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import { logoutUser } from '../../store/actions/auth';

import './Cabinet.scss';

const selectAccessToken = state => !!state.auth.accessToken;

export const Cabinet = () => {
	const isAuthenticated = useSelector(selectAccessToken);
	const {pathname} = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logoutUser());
	}
	
	if(pathname === '/cabinet' && !isAuthenticated ) return navigate('/')

	return (
		<div className="cabinet d-flex my-5">
			<Helmet>
                <title>TechZone - personal cabinet</title>
            </Helmet>
			<div className='cabinet__sidebar d-flex flex-column justify-content-between'>
				<div className='cabinet__user d-flex align-items-center p-3'>
					<img src='/images/icons/person_black.svg' alt='person'/>
					<div className="cabinet-info">
						<div className="cabinet-info__name ">John Doe</div>
						<div className="cabinet-info__email">test@gmail.com</div>
					</div>
				</div>
				<div className='cabinet__navigation'>
					<Navbar bg="transparent">
						<Nav className="me-auto d-flex flex-column">
							<Nav.Link href="#home" className='d-flex align-items-center my-1'>
								<img src='/images/icons/list_alt.svg' alt='person'/>
								<span className='px-3'>Мої замовлення</span>
							</Nav.Link>
							<Nav.Link href="#home" className='d-flex align-items-center my-1'>
								<img src='/images/icons/favorite_black.svg' alt='favorite'/>
								<span className='px-3'>Мої бажання</span>
							</Nav.Link>
							<Nav.Link href="#home" className='d-flex align-items-center my-1'>
								<img src='/images/icons/account_balance_wallet.svg' alt='wallet'/>
								<span className='px-3'>Мій гаманець</span>
							</Nav.Link>
							<Nav.Link href="#home" className='d-flex align-items-center my-1'>
								<img src='/images/icons/chat.svg' alt='chat'/>
								<span className='px-3'>Мої відгуки</span>
							</Nav.Link>
							<Nav.Link href="#home" className='d-flex align-items-center my-1'>
								<img src='/images/icons/forum.svg' alt='forum'/>
								<span className='px-3'>Листування з продавцем</span>
							</Nav.Link>
							<Nav.Link href="#home" className='d-flex align-items-center my-1'>
								<img src='/images/icons/event_available.svg' alt='discounts'/>
								<span className='px-3'>Акції</span>
							</Nav.Link>
						</Nav>
					</Navbar>
				</div>
				<div class="cabinet__tools">
					<div className="cabinet__reset-password my-3">Змінити пароль</div>
					<div className="cabinet__exit my-3" onClick={handleLogout}>Вийти</div>
					<div className="cabinet__delete my-3">Видалити аккаунт</div>
				</div>
			</div>
			<div className="cabinet__main w-75">
				<h2 className='my-5'>Особисті дані</h2>
					<Accordion defaultActiveKey="0">
					<Accordion.Item eventKey="0">
						<Accordion.Header>
							<img src='/images/icons/Male User.svg' alt='user'/>
							<span className='px-3'>Особисті дані</span>
						</Accordion.Header>
						<Accordion.Body>
							<div className="cabinet-info">
								<div className="cabinet-info__name my-3">Імя: John Doe</div>
								<div className="cabinet-info__email my-3">Електронна адреса: test@gmail.com</div>
								<div className="cabinet-info__phonemy-3">Мобільний телефон: 380661966012</div>
							</div>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>
							<img src='/images/icons/Contacts.svg' alt='сontacts'/>
							<span className='px-3'>Контакти</span>
						</Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
							minim veniam, quis nostrud exercitation ullamco laboris nisi ut
							aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
							pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
							culpa qui officia deserunt mollit anim id est laborum.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="2">
						<Accordion.Header>
							<img src='/images/icons/Deliver Food.svg' alt='address'/>
							<span className='px-3'>Адреса доставки</span>
						</Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
							minim veniam, quis nostrud exercitation ullamco laboris nisi ut
							aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
							pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
							culpa qui officia deserunt mollit anim id est laborum.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="3">
						<Accordion.Header>
							<img src='/images/icons/Unlock Private.svg' alt='login'/>
							<span className='px-3'>Логін</span>
						</Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
							minim veniam, quis nostrud exercitation ullamco laboris nisi ut
							aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
							pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
							culpa qui officia deserunt mollit anim id est laborum.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="4">
						<Accordion.Header>
							<img src='/images/icons/User Menu Male.svg' alt='info'/>
							<span className='px-3'>Додаткова інфрмація</span>
						</Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
							minim veniam, quis nostrud exercitation ullamco laboris nisi ut
							aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
							pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
							culpa qui officia deserunt mollit anim id est laborum.
						</Accordion.Body>
					</Accordion.Item>
					</Accordion>
			</div>
		</div>
	)
}
